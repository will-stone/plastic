/*
  Copyright (c) 2017-present, Pete Kazmier

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

/*
  Don't judge me by the code below. My first Go program written after reading
  only first chapter of The Go Programming Language. It indexes the xkcd comic
  metadata so you can search for comics that match keywords.
*/

package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"os"
	"regexp"
	"strconv"
	"time"
)

const (
	// XkcdURL is the URL to the XKCD web site
	XkcdURL = "http://xkcd.org/%s/info.0.json"
)

// Comic represents an XKCD comic's meta-data
type Comic struct {
	Number     int `json:"num"`
	Month      int `json:",string"`
	Day        int `json:",string"`
	Year       int `json:",string"`
	Title      string
	Transcript string
	Alt        string
	Img        string
}

func (c *Comic) String() string {
	return fmt.Sprintf("%d %d/%d/%d \"%s\"\n%s\n%s\n",
		c.Number, c.Month, c.Day, c.Year, c.Title, c.Alt, c.Img)
}

func main() {
	var updateFlag = flag.Bool("u", false, "Update cache with latest comics")
	var indexPath = flag.String("i", os.Getenv("HOME")+"/.xkcd.dat", "Path to the xkcd index")
	var randomFlag = flag.Bool("r", false, "Select a random xkcd")
	var verboseFlag = flag.Bool("v", false, "Display verbose messages")
	flag.Parse()

	if !*verboseFlag {
		log.SetOutput(ioutil.Discard)
	}

	fn := loadIndex
	if *updateFlag {
		fn = updateIndex
	}

	comics, err := fn(*indexPath)
	if err != nil {
		log.Fatal(err)
	}

	if *randomFlag {
		rand.Seed(time.Now().Unix())
		fmt.Println(comics[rand.Intn(len(comics))])
		os.Exit(0)
	}

	if flag.NArg() == 0 {
		os.Exit(0)
	}

	searchTerms, err := buildMatchers(flag.Args())
	if err != nil {
		log.Fatal(err)
	}

OuterLoop:
	for _, comic := range comics {
		for _, pattern := range searchTerms {
			if !(pattern.MatchString(comic.Title) ||
				pattern.MatchString(comic.Transcript) ||
				pattern.MatchString(comic.Alt)) {
				continue OuterLoop
			}
		}
		fmt.Println(comic)
	}
}

// Utility functions for query building

func buildMatchers(terms []string) ([]*regexp.Regexp, error) {
	var searchTerms []*regexp.Regexp
	for _, term := range terms {
		pattern, err := regexp.Compile("(?i)" + term)
		if err != nil {
			return nil, err
		}
		searchTerms = append(searchTerms, pattern)
	}
	return searchTerms, nil
}

// Utility functions to specify comic URLs

func latest() string {
	return fmt.Sprintf(XkcdURL, "")
}

func issue(n int) string {
	return fmt.Sprintf(XkcdURL, strconv.Itoa(n))
}

func latestIssue() (int, error) {
	comic, err := fetchComic(latest())
	if err != nil {
		return 0, err
	}
	return comic.Number, nil
}

func fetchComic(url string) (*Comic, error) {
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("non-200 status code %s", url)
	}

	var c Comic
	if err := json.NewDecoder(resp.Body).Decode(&c); err != nil {
		return nil, err
	}
	return &c, nil
}

// Utility functions to load and build the index

func loadIndex(path string) ([]*Comic, error) {
	f, err := os.OpenFile(path, os.O_RDWR|os.O_CREATE, 0644)
	defer f.Close()
	if err != nil {
		return nil, err
	}

	var comics []*Comic
	decoder := json.NewDecoder(f)
	for {
		var comic Comic
		if err := decoder.Decode(&comic); err == io.EOF {
			break
		} else if err != nil {
			return comics, err
		}
		comics = append(comics, &comic)
	}

	log.Println("loaded", len(comics), "cached entries")
	return comics, nil
}

func updateIndex(path string) ([]*Comic, error) {
	comics, err := loadIndex(path)
	if err != nil {
		return comics, err
	}

	old := lastCachedIssue(comics)
	log.Println("last cached issue was", old)
	new, err := latestIssue()
	if err != nil {
		return comics, err
	}
	log.Println("latest xkcd issue is", new)

	f, err := os.OpenFile(path, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0644)
	if err != nil {
		return nil, err
	}
	defer f.Close()

	encoder := json.NewEncoder(f)
	encoder.SetIndent("", "  ")

	// When index doesn't exist, `old` will be 0, so this
	// block will populate an empty index as well.
	for i := old + 1; i <= new; i++ {
		log.Println("fetching issue", i)
		comic, err := fetchComic(issue(i))
		if err != nil {
			log.Println("Error fetching issue, skipping", issue(i))
			continue
		}
		if err := encoder.Encode(comic); err != nil {
			return comics, err
		}
		comics = append(comics, comic)
	}

	log.Println("updated", len(comics), "cached entries")
	return comics, nil
}

func lastCachedIssue(comics []*Comic) (max int) {
	for _, comic := range comics {
		if comic.Number > max {
			max = comic.Number
		}
	}
	return max
}
