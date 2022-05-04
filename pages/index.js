import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  console.log('articles: ', articles)
  return (
    <div>
      <Head>
        <title>Webdev highlights</title>
        <meta
          name='keywords'
          content='web developement, programming'
        />
      </Head>
      <h1>Highlights</h1>
    </div>
  )
}


export const getStaticProps = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  )

  const articles = await response.json()

  return {
    props: {
      articles
    }
  }
}