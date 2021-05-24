import clsx from 'clsx'
import type { NextPage } from 'next'
import type { ReactNode } from 'react'

import Layout from '../components/layout'
import { Swatch } from '../components/swatch'

function Card({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="border border-bunker rounded overflow-hidden divide-y divide-bunker">
      {children}
    </div>
  )
}

function CardHeader({ children }: { children: ReactNode }): JSX.Element {
  return <h3 className="text-lg bg-woodsmoke p-4">{children}</h3>
}

function CardBody({
  children,
  className,
}: {
  className?: string
  children: ReactNode
}): JSX.Element {
  return <div className={clsx('p-4', className)}>{children}</div>
}

function NormalBoldText(): JSX.Element {
  return (
    <>
      <pre>Normal text</pre>
      <pre>
        <strong>Bold text</strong>
      </pre>
    </>
  )
}

const PalettePage: NextPage = () => (
  <Layout>
    <section className="flex justify-center items-center space-x-6 sm:space-x-8 mb-8">
      <img alt="" className="h-24" src="/images/logo.svg" />
      <span className="text-shuttleGray font-bold text-7xl font-comfortaa">
        +
      </span>
      <span aria-label="" className="text-7xl" role="img">
        🎨
      </span>
    </section>

    <h1 className="mb-16">Palette</h1>

    {/* TODO Add a description of the "spec" */}
    {/* <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      faucibus lacus est. Pellentesque ac enim nisl. Proin eget neque convallis,
      egestas risus eu, bibendum magna. Morbi ultricies, ex vitae facilisis
      posuere, eros odio fringilla mauris, sit amet lacinia purus elit consequat
      orci. Nunc consequat quam purus, id convallis urna condimentum at. Fusce
      id mollis tortor. Nullam semper magna vel sapien faucibus auctor. Etiam
      eget dui vitae metus interdum tempus ut a velit. Nulla efficitur magna a
      metus fermentum posuere.
    </p> */}

    <h2 className="mb-8">Syntax</h2>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <Card>
        <CardHeader>Keywords</CardHeader>
        <Swatch bg="bg-sunglo" />
        <CardBody>
          <pre className="text-sunglo">if</pre>
          <pre className="text-sunglo">import</pre>
          <pre className="text-sunglo">return</pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Constants</CardHeader>
        <Swatch bg="bg-fountainBlue" />
        <CardBody>
          <pre className="text-fountainBlue">1234</pre>
          <pre className="text-fountainBlue">undefined</pre>
          <pre className="text-fountainBlue">true</pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Storage</CardHeader>
        <Swatch bg="bg-cornflowerBlue" />
        <CardBody>
          <pre className="text-cornflowerBlue">const</pre>
          <pre className="text-cornflowerBlue">let</pre>
          <pre className="text-cornflowerBlue">class</pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>String Literals</CardHeader>
        <Swatch bg="bg-olivine" />
        <CardBody>
          <pre>
            &quot;<code className="text-olivine">lorem</code>&quot;
          </pre>
          <pre>
            &apos;<code className="text-olivine">ipsum</code>&apos;
          </pre>
          <pre>
            &#96;<code className="text-olivine">dolor</code>&#96;
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Attributes & Props</CardHeader>
        <Swatch bg="bg-whiskey" />
        <CardBody>
          <pre className="text-whiskey">href</pre>
          <pre className="text-whiskey">className</pre>
          <pre className="text-whiskey">src</pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Tags &amp; Types</CardHeader>
        <Swatch bg="bg-harvestGold" />
        <CardBody>
          <pre className="text-harvestGold">div</pre>
          <pre className="text-harvestGold">span</pre>
          <pre className="text-harvestGold">boolean</pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Function Names</CardHeader>
        <Swatch bg="bg-lavender" />
        <CardBody>
          <pre>
            <span className="text-cornflowerBlue">function</span>{' '}
            <span className="text-lavender">add</span>() &#123;&#125;
          </pre>
          <pre>
            <span className="text-lavender">doThing</span>()
          </pre>
          <pre>
            console.<span className="text-lavender">log</span>()
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Comments</CardHeader>
        <Swatch bg="bg-shuttleGray" />
        <CardBody>
          <pre className="text-shuttleGray">&#47;&#47; Comment</pre>
          <pre className="text-shuttleGray">&#47;* TODO comment *&#47;</pre>
          <pre className="text-shuttleGray">#!/bin/bash</pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Text &amp; Punctuation</CardHeader>
        <Swatch bg="bg-cadetBlue" />
        <CardBody>
          <pre>&#123;&#125;()[]&quot;&apos;&#96;!&lt;&gt;</pre>
          <pre>Lorem ipsum dolor.</pre>
          <pre>Consectetur adipiscing.</pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Variables</CardHeader>
        <Swatch bg="bg-ghost" />
        <CardBody>
          <pre>
            <span className="text-cornflowerBlue">const</span>{' '}
            <span className="text-ghost">aVariable</span>{' '}
            <span className="text-sunglo">=</span>{' '}
            <span className="text-fountainBlue">true</span>
          </pre>
        </CardBody>
      </Card>
    </section>

    <h2 className="mb-4">UI</h2>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <Card>
        <CardHeader>Borders</CardHeader>
        <Swatch bg="bg-bunker" />
      </Card>
      <Card>
        <CardHeader>Background</CardHeader>
        <Swatch bg="bg-woodsmoke" />
      </Card>
      <Card>
        <CardHeader>Workspace</CardHeader>
        <Swatch bg="bg-shark" />
      </Card>
      <Card>
        <CardHeader>Information</CardHeader>
        <Swatch bg="bg-dodgerBlue" />
      </Card>
      <Card>
        <CardHeader>Warning</CardHeader>
        <Swatch bg="bg-robRoy" />
      </Card>
      <Card>
        <CardHeader>Error</CardHeader>
        <Swatch bg="bg-valencia" />
      </Card>
    </section>

    <h2 className="mb-4">ANSI</h2>

    <p className="mb-8">
      Being a simple theme, Plastic does not prescribe bright ANSI colours. It
      is recommended to use <strong>bold text</strong> for emphasis.
    </p>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <Card>
        <CardHeader>ANSI Black</CardHeader>
        <Swatch bg="bg-shuttleGray" />
        <CardBody className="text-shuttleGray">
          <NormalBoldText />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>ANSI Red</CardHeader>
        <Swatch bg="bg-sunglo" />
        <CardBody className="text-sunglo">
          <NormalBoldText />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>ANSI Green</CardHeader>
        <Swatch bg="bg-olivine" />
        <CardBody className="text-olivine">
          <NormalBoldText />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>ANSI Yellow</CardHeader>
        <Swatch bg="bg-harvestGold" />
        <CardBody className="text-harvestGold">
          <NormalBoldText />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>ANSI Blue</CardHeader>
        <Swatch bg="bg-cornflowerBlue" />
        <CardBody className="text-cornflowerBlue">
          <NormalBoldText />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>ANSI Magenta</CardHeader>
        <Swatch bg="bg-lavender" />
        <CardBody className="text-lavender">
          <NormalBoldText />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>ANSI Cyan</CardHeader>
        <Swatch bg="bg-fountainBlue" />
        <CardBody className="text-fountainBlue">
          <NormalBoldText />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>ANSI White</CardHeader>
        <Swatch bg="bg-cadetBlue" />
        <CardBody className="text-cadetBlue">
          <NormalBoldText />
        </CardBody>
      </Card>
    </section>
  </Layout>
)

export default PalettePage
