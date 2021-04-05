import appRoot from 'app-root-path'
import fs from 'fs-extra'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import path from 'path'

import Layout from '../../components/layout'

export const getStaticPaths: GetStaticPaths = async () => {
  const { path: appPath } = appRoot

  const themes = await fs.readdir(path.join(appPath, 'themes'))

  const paths = themes.map((themeName) => ({ params: { slug: themeName } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
  await new Promise((resolve) => {
    resolve('')
  })

  // Pass post data to the page via props
  return { props: {} }
}

const ThemePage: NextPage = () => <Layout className="space-y-16">Moo</Layout>

export default ThemePage
