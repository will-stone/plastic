import appRoot from 'app-root-path'
import fs from 'fs-extra'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
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
  if (typeof params?.slug === 'string') {
    md = await fs.readFile(
      path.join(appPath, 'themes', params.slug, 'INSTALL.md'),
      'utf8',
    )
  }

  return { props: { md } }
}

const ThemePage: NextPage<{ md: string }> = ({ md }) => (
  <Layout>
    <section className="prose prose-lg mx-auto">
      <ReactMarkdown>{md}</ReactMarkdown>
    </section>
  </Layout>
)

export default ThemePage
