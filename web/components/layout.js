import Head from 'next/head';

import { Footer, Nav } from '@/components/site';
import { AuthModal } from '@/components/auth';

import styles from './layout.module.css';

const Layout = ({ title, children, site = {} }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content={'black'} />
        <link
          rel="preconnect"
          href="https://cdn.sanity.io"
          crossOrigin="true"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" /> */}
      </Head>
      <style jsx global>
        {`
          body {
            background: var(--color-background);
          }
        `}
      </style>
      <AuthModal />
      <Nav data={site.header} />
      <main className={styles.main}>{children}</main>
      <Footer data={site.footer} />
    </div>
  );
};

export default Layout;
