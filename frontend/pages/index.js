import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lukso Demo Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Lukso Demo Page
        </h3>

        <div className={styles.grid}>
          <button type="button" className="btn btn-secondary">Connect Lukso Wallet</button>
        </div>


      </main>

      <footer className={styles.footer}>
        Powered By Ayden lee
      </footer>
    </div >
  )
}
