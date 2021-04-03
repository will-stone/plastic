import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  title?: string
  className?: string
}

const Layout: React.FC<Props> = ({ children, title, className }) => {
  const router = useRouter()

  return (
    <div className="flex flex-col h-screen space-y-16 pt-8">
      <Head>
        <title>{title && `${title} | `}Plastic Theme</title>
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
        <meta content="Plastic Theme" name="apple-mobile-web-app-title" />
        <meta content="Plastic Theme" name="application-name" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/favicon/browserconfig.xml?v=WGNOBL3XeM"
          name="msapplication-config"
        />
        <meta content="#ffffff" name="theme-color" />
      </Head>

      <header>
        <nav className="container flex flex-row justify-center items-center space-x-8 font-comfortaa">
          <Link href="/">
            <a
              className={clsx(
                router.asPath === '/' ? 'text-ghost' : 'text-shuttleGray',
                'hover:text-ghost',
              )}
            >
              Home
            </a>
          </Link>
          <Link href="/palette">
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
            className="text-shuttleGray hover:text-ghost group"
            href="https://www.buymeacoffee.com/wstone"
            rel="noreferrer"
            target="_blank"
          >
            <span
              aria-label="carrot"
              className="opacity-50 group-hover:opacity-100"
              role="img"
            >
              🥕
            </span>{' '}
            <span>Support</span>
          </a>
        </nav>
      </header>

      <main className={clsx('container flex-grow', className)}>{children}</main>

      <footer className="bg-woodsmoke border-t border-bunker py-12 text-center">
        <div className="container">
          Made with{' '}
          <a
            href="https://www.buymeacoffee.com/wstone"
            rel="noreferrer"
            target="_blank"
          >
            <span aria-label="carrots" role="img">
              🥕🥕🥕
            </span>
          </a>{' '}
          by{' '}
          <a className="underline" href="https://wstone.io">
            Will Stone
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
