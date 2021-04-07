import appRoot from 'app-root-path'
import fs from 'fs-extra'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import path from 'path'

import Layout from '../components/layout'

const { path: appPath } = appRoot

export const getStaticProps: GetStaticProps = async () => {
  const slugs = await fs.readdir(path.join(appPath, 'themes'))

  const apps = []
  for await (const slug of slugs) {
    const packageJson = await fs.readJson(
      path.join(appPath, 'themes', slug, 'package.json'),
    )
    apps.push({ slug, title: packageJson.plastic.title })
  }

  return { props: { apps } }
}

const IndexPage: NextPage<{ apps: { slug: string; title: string }[] }> = ({
  apps = [],
}) => (
  <Layout className="space-y-16 md:space-y-24">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6 flex flex-col items-center">
        <img
          alt=""
          className="block mx-auto"
          height="130"
          src="/images/logo.svg"
          width="130"
        />

        <h1>Plastic</h1>

        <h2 className="text-center">
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
      {apps.map(({ slug, title }) => (
        <Link key={slug} href={`/themes/${slug}`}>
          <a className="border border-bunker bg-woodsmoke rounded overflow-hidden divide-y divide-bunker flex flex-col hover:text-ghost">
            <h3 className="bg-woodsmoke font-comfortaa text-xl p-4 text-center">
              {title}
            </h3>
            <div className="flex-grow px-4 py-8 flex justify-center items-center">
              <img
                alt=""
                className="h-24 mx-auto"
                src={`https://raw.githubusercontent.com/will-stone/plastic/main/themes/${slug}/logo.svg`}
              />
            </div>
          </a>
        </Link>
      ))}
    </section>
  </Layout>
)

export default IndexPage
