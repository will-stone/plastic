import appRoot from 'app-root-path'
import fs from 'fs-extra'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import path from 'path'
import YAML from 'yaml'

import Layout from '../components/layout'

const { path: appPath } = appRoot

export const getStaticProps: GetStaticProps = async () => {
  const slugs = fs
    .readdirSync(path.join(appPath, 'themes'), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  const apps = []

  for await (const slug of slugs) {
    const packageJson = await fs.readJson(
      path.join(appPath, 'themes', slug, 'package.json'),
    )

    apps.push({ slug, title: packageJson.plastic.title })
  }

  const communityThemes = Object.entries(
    YAML.parse(
      fs.readFileSync(
        path.join(appPath, 'themes', 'community-themes.yml'),
        'utf8',
      ),
      // TODO parse this through Zod to avoid errors
    ) as Record<string, { screenshot: string; url: string }>,
  ).map(([name, props]) => ({
    name,
    ...props,
  }))

  return { props: { apps, communityThemes } }
}

const IndexPage: NextPage<{
  apps: { slug: string; title: string }[]
  communityThemes: { name: string; url: string; screenshot: string }[]
}> = ({ apps = [], communityThemes = [] }) => (
  <Layout className="space-y-16 md:space-y-24">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
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

    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {apps.map(({ slug, title }) => (
        <Link key={slug} href={`/themes/${slug}`} legacyBehavior>
          <a className="border border-bunker bg-bunker rounded overflow-hidden divide-y divide-bunker flex flex-col hover:text-ghost">
            <h3 className="bg-woodsmoke font-comfortaa text-xl p-4 text-center">
              {title}
            </h3>
            <div className="flex-grow p-4 flex justify-center items-center">
              <img
                alt=""
                className="mx-auto"
                src={`https://raw.githubusercontent.com/will-stone/plastic/main/themes/${slug}/screenshot.png`}
              />
            </div>
          </a>
        </Link>
      ))}
    </section>

    <h2>Community Themes</h2>

    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {communityThemes.map(({ screenshot, name, url }) => (
        <Link key={name} href={url} legacyBehavior>
          <a
            className="border border-bunker bg-bunker rounded overflow-hidden divide-y divide-bunker flex flex-col hover:text-ghost"
            target="_blank"
          >
            <h3 className="bg-woodsmoke font-comfortaa text-xl p-4 text-center">
              {name}
            </h3>
            <div className="flex-grow p-4 flex justify-center items-center">
              <img alt="" className="mx-auto" src={screenshot} />
            </div>
          </a>
        </Link>
      ))}
    </section>
  </Layout>
)

export default IndexPage
