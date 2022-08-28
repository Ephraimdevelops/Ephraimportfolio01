import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Blogsec from '../components/blogsec'
import Intro from '../components/intro'
import Portfolio from '../components/portfolio'
import Services from '../components/Services'
import Testimonials from '../components/testimonials'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Intro/>
        <About/>
        <Services/>
        <Portfolio/>
        <Blogsec/>
        <Testimonials/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
