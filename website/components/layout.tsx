import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import React from 'react'
import GitHubButton from 'react-github-btn'

import { Icon } from './icon'

type Props = {
  readonly title?: string
  readonly className?: string
  readonly children: ReactNode
}

const Layout: React.FC<Props> = ({ children, title, className }) => {
  const router = useRouter()

  return (
    <div className="flex h-screen flex-col space-y-16 pt-8">
      <Head>
        <title>{`${title ? `${title} | ` : ''}Plastic Theme`}</title>
        <meta
          content="A simple syntax and UI theme by Will Stone."
          name="description"
        />
        <meta charSet="utf-8" />
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />

        <link
          href="/favicon/apple-touch-icon.png?v=WGNOBL3XeM"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon/favicon-32x32.png?v=WGNOBL3XeM"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon/favicon-16x16.png?v=WGNOBL3XeM"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicon/site.webmanifest?v=WGNOBL3XeM" rel="manifest" />
        <link
          color="#e06c75"
          href="/favicon/safari-pinned-tab.svg?v=WGNOBL3XeM"
          rel="mask-icon"
        />
        <link href="/favicon/favicon.ico?v=WGNOBL3XeM" rel="shortcut icon" />
        <meta content="Plastic" name="apple-mobile-web-app-title" />
        <meta content="Plastic" name="application-name" />
        <meta content="#21252B" name="msapplication-TileColor" />
        <meta
          content="/favicon/browserconfig.xml?v=WGNOBL3XeM"
          name="msapplication-config"
        />
        <meta content="#21252B" name="theme-color" />
      </Head>

      <header>
        <nav className="container flex flex-row items-center justify-center space-x-8 font-comfortaa">
          <Link href="/" legacyBehavior>
            <a
              className={clsx(
                router.asPath === '/' ? 'text-ghost' : 'text-shuttleGray',
                'hover:text-ghost',
              )}
            >
              Apps
            </a>
          </Link>
          <Link href="/palette" legacyBehavior>
            <a
              className={clsx(
                router.asPath === '/palette'
                  ? 'text-ghost'
                  : 'text-shuttleGray',
                'hover:text-ghost',
              )}
            >
              Palette
            </a>
          </Link>
          <a
            className="group inline-flex items-center text-shuttleGray hover:text-ghost"
            href="https://www.buymeacoffee.com/wstone"
            rel="noreferrer"
            target="_blank"
          >
            <Icon
              className="mr-1 h-5 w-5 flex-shrink-0 text-yellow-400 opacity-50 group-hover:opacity-100"
              icon="coffee"
            />{' '}
            <span className="hidden sm:inline-block">Buy Me a Coffee</span>
          </a>
        </nav>
      </header>

      <main className={clsx('container', className)}>{children}</main>

      <footer className="flex-grow space-y-8 border-t border-bunker bg-woodsmoke py-12 text-center">
        <div className="space-x-4">
          <GitHubButton
            aria-label="Star will-stone/plastic on GitHub"
            data-color-scheme="no-preference: dark; light: light; dark: dark;"
            data-icon="octicon-star"
            data-show-count="true"
            data-size="large"
            href="https://github.com/will-stone/plastic"
          >
            Star
          </GitHubButton>

          <GitHubButton
            aria-label="Fork will-stone/plastic on GitHub"
            data-color-scheme="no-preference: dark; light: light; dark: dark;"
            data-icon="octicon-repo-forked"
            data-show-count="true"
            data-size="large"
            href="https://github.com/will-stone/plastic/fork"
          >
            Fork
          </GitHubButton>

          <GitHubButton
            aria-label="Sponsor @will-stone on GitHub"
            data-color-scheme="no-preference: dark; light: light; dark: dark;"
            data-icon="octicon-heart"
            data-size="large"
            href="https://github.com/sponsors/will-stone"
          >
            Sponsor
          </GitHubButton>
        </div>

        <div className="container font-comfortaa">
          <a
            href="https://www.buymeacoffee.com/wstone"
            rel="noreferrer"
            target="_blank"
          >
            <span>♻️</span>
          </a>{' '}
          By{' '}
          <a className="underline" href="https://wstone.uk">
            Will Stone
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
