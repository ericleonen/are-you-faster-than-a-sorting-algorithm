import Head from 'next/head';

import Title from "../components/Title";
import LevelSelector from "../components/LevelSelector";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Are You Faster Than a Sorting Algorithm?</title>
        <meta name="description" content="Game for nerds" />
      </Head>
      <div className="h-screen flex justify-center items-center flex-col">
        <Title>Are You Faster Than a Sorting Algorithm?</Title>
        <LevelSelector />
      </div>
    </div>
  )
}
