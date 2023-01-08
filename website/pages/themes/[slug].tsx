import appRoot from 'app-root-path'
import fs from 'fs-extra'
import get from 'lodash/get'
import type { GetStaticPathsResult, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import path from 'path'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/layout'

const { path: appPath } = appRoot

export const getStaticPaths = (): GetStaticPathsResult => {
  const themes = fs
    .readdirSync(path.join(appPath, 'themes'), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  const paths = themes.map((themeName) => ({ params: { slug: themeName } }))
  return { fallback: false, paths }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let md = ''
  let packageJson = {}

  if (typeof params?.slug === 'string') {
    packageJson = await fs.readJson(
      path.join(appPath, 'themes', params.slug, 'package.json'),
    )
    md = await fs.readFile(
      path.join(appPath, 'themes', params.slug, 'INSTALL.md'),
      'utf8',
    )
  }

  return {
    props: {
      appLink: get(packageJson, 'plastic.appLink'),
      md,
      slug: params?.slug,
      title: get(packageJson, 'plastic.title'),
    },
  }
}

const ThemePage: NextPage<{
  md: string
  title: string
  appLink: string
  slug: string
}> = ({ md, title, slug, appLink }) => (
  <Layout className="space-y-8" title={title}>
    <h1>Plastic</h1>

    <section className="flex flex-col sm:flex-row justify-center items-center sm:gap-8">
      <img alt="" className="h-24" src="/images/logo.svg" />
      <span className="text-shuttleGray font-bold text-7xl font-comfortaa">
        +
      </span>
      <span className="text-4xl font-comfortaa text-harvestGold">{title}</span>
    </section>

    <h2 className="text-center !mt-16">
      A simple theme for{' '}
      <a className="text-lavender underline" href={appLink}>
        {title}
      </a>{' '}
      and{' '}
      <Link href="/" legacyBehavior>
        <a className="text-cornflowerBlue underline">other apps</a>
      </Link>
      .
    </h2>

    <section className="prose sm:prose-lg mx-auto">
      <img
        alt="screenshot"
        src={`https://raw.githubusercontent.com/will-stone/plastic/main/themes/${slug}/screenshot.png`}
      />
      <ReactMarkdown>{md}</ReactMarkdown>
    </section>

    <section className="flex justify-center">
      <a
        className="bg-sunglo py-2 px-4 text-white rounded font-comfortaa"
        href={`https://github.com/will-stone/plastic/tree/main/themes/${slug}`}
      >
        Source Code
      </a>
    </section>
  </Layout>
)

export default ThemePage
