import appRoot from 'app-root-path'
import fs from 'fs-extra'
import get from 'lodash/get'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import path from 'path'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/layout'

const { path: appPath } = appRoot

export const getStaticPaths: GetStaticPaths = async () => {
  const themes = await fs.readdir(path.join(appPath, 'themes'))
  const paths = themes.map((themeName) => ({ params: { slug: themeName } }))
  return { paths, fallback: false }
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
      md,
      title: get(packageJson, 'plastic.title'),
      appLink: get(packageJson, 'plastic.appLink'),
      slug: params?.slug,
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
    <section className="flex justify-center items-center space-x-6 sm:space-x-8">
      <img alt="" className="h-24" src="/images/logo.svg" />
      <span className="text-shuttleGray font-bold text-7xl font-comfortaa">
        +
      </span>
      <img
        alt=""
        className="h-24"
        src={`https://raw.githubusercontent.com/will-stone/plastic/main/themes/${slug}/logo.svg`}
      />
    </section>

    <h1>Plastic</h1>

    <h2 className="text-center">
      A simple theme for{' '}
      <a className="text-lavender underline" href={appLink}>
        {title}
      </a>{' '}
      and{' '}
      <Link href="/">
        <a className="text-cornflowerBlue underline">other apps</a>
      </Link>
    </h2>

    <section className="prose sm:prose-lg mx-auto">
      <img
        alt="screenshot"
        src={`https://raw.githubusercontent.com/will-stone/plastic/main/themes/${slug}/screenshot.png`}
      />
      <ReactMarkdown>{md}</ReactMarkdown>
    </section>
  </Layout>
)

export default ThemePage
