import appRoot from 'app-root-path'
import fs from 'fs-extra'
import MarkdownIt from 'markdown-it'
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

  const markdownIt = new MarkdownIt()
  const [, { content: title }] = markdownIt.parse(md, {})

  return { props: { md, title, slug: params?.slug } }
}

const ThemePage: NextPage<{ md: string; title: string; slug: string }> = ({
  md,
  title,
  slug,
}) => (
  <Layout title={title}>
    <section className="prose sm:prose-lg mx-auto">
      <img alt="" className="h-24 mx-auto" src={`/images/logos/${slug}.svg`} />
      <ReactMarkdown>{md}</ReactMarkdown>
    </section>
  </Layout>
)

export default ThemePage
