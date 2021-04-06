import type { NextPage } from 'next'
import { FC } from 'react'

import Layout from '../components/layout'
import { Swatch } from '../components/swatch'

const SyntaxCard: FC<{
  bg: string
  heading?: string
}> = ({ bg, heading = '', children }) => {
  return (
    <div className="border border-bunker rounded overflow-hidden divide-y divide-bunker">
      <Swatch bg={bg} />
      <div>
        <h3 className="text-lg bg-woodsmoke p-4">{heading}</h3>
        <p className="p-4">{children}</p>
      </div>
    </div>
  )
}

const UICard: FC<{ bg: string }> = ({ bg, children }) => {
  return (
    <div className="border border-bunker rounded overflow-hidden divide-y divide-bunker">
      <Swatch bg={bg} />
      <h3 className="text-lg bg-woodsmoke p-4 flex items-center">{children}</h3>
    </div>
  )
}

const PalettePage: NextPage = () => (
  <Layout className="space-y-8 sm:space-y-16">
    <div className="space-y-4">
      <img alt="" className="h-24 mx-auto" src="/images/logo.svg" />
      <h1>Palette</h1>
    </div>

    <section className="space-y-4">
      <h2>Syntax</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        <SyntaxCard bg="bg-sunglo" heading="Keywords">
          <code className="block text-sunglo">if</code>
          <code className="block text-sunglo">import</code>
          <code className="block text-sunglo">return</code>
        </SyntaxCard>

        <SyntaxCard bg="bg-fountainBlue" heading="Constants">
          <code className="block text-fountainBlue">1234</code>
          <code className="block text-fountainBlue">undefined</code>
          <code className="block text-fountainBlue">true</code>
        </SyntaxCard>

        <SyntaxCard bg="bg-cornflowerBlue" heading="Storage">
          <code className="block text-cornflowerBlue">const</code>
          <code className="block text-cornflowerBlue">let</code>
          <code className="block text-cornflowerBlue">class</code>
        </SyntaxCard>

        <SyntaxCard bg="bg-olivine" heading="String Literals">
          <span className="block">
            &quot;<code className="text-olivine">lorem</code>&quot;
          </span>
          <span className="block">
            &apos;<code className="text-olivine">ipsum</code>&apos;
          </span>
          <span className="block">
            &#96;<code className="text-olivine">dolor</code>&#96;
          </span>
        </SyntaxCard>

        <SyntaxCard bg="bg-whiskey" heading="Attributes & Props">
          <code className="block text-whiskey">href</code>
          <code className="block text-whiskey">className</code>
          <code className="block text-whiskey">src</code>
        </SyntaxCard>

        <SyntaxCard bg="bg-harvestGold" heading="Tags & Types">
          <code className="block text-harvestGold">div</code>
          <code className="block text-harvestGold">span</code>
          <code className="block text-harvestGold">boolean</code>
        </SyntaxCard>

        <SyntaxCard bg="bg-lavender" heading="Function Names">
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
        </SyntaxCard>

        <SyntaxCard bg="bg-shuttleGray" heading="Comments">
          <code className="text-shuttleGray block">&#47;&#47; Comment</code>
          <code className="text-shuttleGray block">
            &#47;* TODO comment *&#47;
          </code>
          <code className="text-shuttleGray block">#!/bin/bash</code>
        </SyntaxCard>

        <SyntaxCard bg="bg-cadetBlue" heading="Text & Punctuation">
          <code className="block">
            &#123;&#125;()[]&quot;&apos;&#96;!&lt;&gt;
          </code>
          <code className="block">Lorem ipsum dolor sit amet.</code>
        </SyntaxCard>

        <SyntaxCard bg="bg-ghost" heading="Variables">
          <code className="block">
            <span className="text-cornflowerBlue">const</span>{' '}
            <span className="text-ghost">aVariable</span>{' '}
            <span className="text-sunglo">=</span>{' '}
            <span className="text-fountainBlue">true</span>
          </code>
        </SyntaxCard>
      </div>
    </section>

    <section className="space-y-4">
      <h2>UI</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        <UICard bg="bg-bunker">Borders</UICard>
        <UICard bg="bg-woodsmoke">Background</UICard>
        <UICard bg="bg-shark">Workspace</UICard>
        <UICard bg="bg-dodgerBlue">Information</UICard>
        <UICard bg="bg-robRoy">Warning</UICard>
        <UICard bg="bg-valencia">Error</UICard>
      </div>
    </section>
  </Layout>
)

export default PalettePage
