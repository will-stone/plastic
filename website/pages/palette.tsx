import type { NextPage } from 'next'

import Layout from '../components/layout'
import { Swatch } from '../components/swatch'

function Card({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}): JSX.Element {
  return (
    <div className="border border-bunker rounded overflow-hidden divide-y divide-bunker">
      {children}
    </div>
  )
}

function CardHeader({ children }: { children: string }): JSX.Element {
  return <h3 className="text-lg bg-woodsmoke p-4">{children}</h3>
}

function CardBody({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}): JSX.Element {
  return <p className="p-4">{children}</p>
}

const PalettePage: NextPage = () => (
  <Layout className="space-y-8">
    <section className="flex justify-center items-center space-x-6 sm:space-x-8">
      <img alt="" className="h-24" src="/images/logo.svg" />
      <span aria-label="" className="text-7xl" role="img">
        🎨
      </span>
    </section>

    <h1>Palette</h1>

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

    <h2>Syntax</h2>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
      <Card>
        <Swatch bg="bg-sunglo" />
        <CardHeader>Keywords</CardHeader>
        <CardBody>
          <code className="block text-sunglo">if</code>
          <code className="block text-sunglo">import</code>
          <code className="block text-sunglo">return</code>
        </CardBody>
      </Card>

      <Card>
        <Swatch bg="bg-fountainBlue" />
        <CardHeader>Constants</CardHeader>
        <CardBody>
          <code className="block text-fountainBlue">1234</code>
          <code className="block text-fountainBlue">undefined</code>
          <code className="block text-fountainBlue">true</code>
        </CardBody>
      </Card>

      <Card>
        <Swatch bg="bg-cornflowerBlue" />
        <CardHeader>Storage</CardHeader>
        <CardBody>
          <code className="block text-cornflowerBlue">const</code>
          <code className="block text-cornflowerBlue">let</code>
          <code className="block text-cornflowerBlue">class</code>
        </CardBody>
      </Card>

      <Card>
        <Swatch bg="bg-olivine" />
        <CardHeader>String Literals</CardHeader>
        <CardBody>
          <span className="block">
            &quot;<code className="text-olivine">lorem</code>&quot;
          </span>
          <span className="block">
            &apos;<code className="text-olivine">ipsum</code>&apos;
          </span>
          <span className="block">
            &#96;<code className="text-olivine">dolor</code>&#96;
          </span>
        </CardBody>
      </Card>

      <Card>
        <Swatch bg="bg-whiskey" />
        <CardHeader>Attributes & Props</CardHeader>
        <CardBody>
          <code className="block text-whiskey">href</code>
          <code className="block text-whiskey">className</code>
          <code className="block text-whiskey">src</code>
        </CardBody>
      </Card>

      <Card>
        <Swatch bg="bg-harvestGold" />
        <CardHeader>Tags &amp; Types</CardHeader>
        <CardBody>
          <code className="block text-harvestGold">div</code>
          <code className="block text-harvestGold">span</code>
          <code className="block text-harvestGold">boolean</code>
        </CardBody>
      </Card>

      <Card>
        <Swatch bg="bg-lavender" />
        <CardHeader>Function Names</CardHeader>
        <CardBody>
          <code className="block">
            <span className="text-cornflowerBlue">function</span>{' '}
            <span className="text-lavender">add</span>() &#123;&#125;
          </code>
          <code className="block">
            <span className="text-lavender">doThing</span>()
          </code>
          <code className="block">
            console.<span className="text-lavender">log</span>()
          </code>
        </CardBody>
      </Card>

      <Card>
        <Swatch bg="bg-shuttleGray" />
        <CardHeader>Comments</CardHeader>
        <CardBody>
          <code className="text-shuttleGray block">&#47;&#47; Comment</code>
          <code className="text-shuttleGray block">
            &#47;* TODO comment *&#47;
          </code>
          <code className="text-shuttleGray block">#!/bin/bash</code>
        </CardBody>
      </Card>

      <Card>
        <Swatch bg="bg-cadetBlue" />
        <CardHeader>Text &amp; Punctuation</CardHeader>
        <CardBody>
          <code className="block">
            &#123;&#125;()[]&quot;&apos;&#96;!&lt;&gt;
          </code>
          <code className="block">Lorem ipsum dolor sit amet.</code>
        </CardBody>
      </Card>

      <Card>
        <Swatch bg="bg-ghost" />
        <CardHeader>Variables</CardHeader>
        <CardBody>
          <code className="block">
            <span className="text-cornflowerBlue">const</span>{' '}
            <span className="text-ghost">aVariable</span>{' '}
            <span className="text-sunglo">=</span>{' '}
            <span className="text-fountainBlue">true</span>
          </code>
        </CardBody>
      </Card>
    </section>

    <h2>UI</h2>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
      <Card>
        <Swatch bg="bg-bunker" />
        <CardHeader>Borders</CardHeader>
      </Card>
      <Card>
        <Swatch bg="bg-woodsmoke" />
        <CardHeader>Background</CardHeader>
      </Card>
      <Card>
        <Swatch bg="bg-shark" />
        <CardHeader>Workspace</CardHeader>
      </Card>
      <Card>
        <Swatch bg="bg-dodgerBlue" />
        <CardHeader>Information</CardHeader>
      </Card>
      <Card>
        <Swatch bg="bg-robRoy" />
        <CardHeader>Warning</CardHeader>
      </Card>
      <Card>
        <Swatch bg="bg-valencia" />
        <CardHeader>Error</CardHeader>
      </Card>
    </section>
  </Layout>
)

export default PalettePage
