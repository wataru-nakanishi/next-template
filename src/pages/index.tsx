import React, {FC} from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home: FC = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>Home</div>
    <Link href="/signup">
      <button type="button">register</button>
    </Link>
    <Link href="/login">
      <button type="button">login</button>
    </Link>
  </div>
)

export default Home