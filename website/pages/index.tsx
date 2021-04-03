import type { NextPage } from 'next'

import Layout from '../components/layout'

const IndexPage: NextPage = () => (
  <Layout className="space-y-16">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <img
          alt=""
          className="block mx-auto"
          height="130"
          src="/images/logo.svg"
          width="130"
        />

        <h1 className="text-center tracking-widest text-sunglo text-5xl">
          plastic
        </h1>

        <h2 className="text-center text-ghost text-2xl">
          A simple syntax <span className="inline-block">and UI theme</span>
        </h2>
      </div>

      <div>
        <img
          alt="Screenshot"
          className="border border-bunker rounded shadow-lg"
          src="/images/code.png"
        />
      </div>
    </section>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <a
        className="border border-bunker rounded overflow-hidden divide-y divide-bunker flex flex-col"
        href="https://marketplace.visualstudio.com/items?itemName=will-stone.plastic"
      >
        <h3 className="bg-woodsmoke font-comfortaa text-xl p-4 text-center">
          Visual Studio Code
        </h3>
        <div className="flex-grow px-4 py-8 flex justify-center items-center">
          <img
            alt="Visual Studio Code"
            className="h-24 mx-auto"
            src="/images/visual-studio-code.svg"
          />
        </div>
      </a>

      <a
        className="border border-bunker rounded overflow-hidden divide-y divide-bunker flex flex-col"
        href="https://github.com/will-stone/Plastic-Theme/blob/main/themes/Terminal-app/INSTALL.md"
      >
        <h3 className="bg-woodsmoke font-comfortaa text-xl p-4 text-center">
          macOS Terminal
        </h3>
        <div className="flex-grow px-4 py-8 flex justify-center items-center">
          <img
            alt="macOS Terminal"
            className="h-24 mx-auto"
            src="/images/macos-terminal.svg"
          />
        </div>
      </a>

      <a
        className="border border-bunker rounded overflow-hidden divide-y divide-bunker flex flex-col"
        href="https://github.com/will-stone/Plastic-Theme/blob/main/themes/iTerm/INSTALL.md"
      >
        <h3 className="bg-woodsmoke font-comfortaa text-xl p-4 text-center">
          iTerm2
        </h3>
        <div className="flex-grow px-4 py-8 flex justify-center items-center">
          <img alt="iTerm2" className="h-24 mx-auto" src="/images/iTerm2.svg" />
        </div>
      </a>
    </section>
  </Layout>
)

export default IndexPage
