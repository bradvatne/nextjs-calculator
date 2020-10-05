import Layout from '../components/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Calculator</title>
        <link rel="stylesheet" href="../style.css"/>
      </Head>
      <Layout/>
    </div>
  )
}
