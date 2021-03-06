import ItemList from '../components/ItemList'
import { server } from '../config'
// import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'

export default function Home({ articles }) {
  // console.log('articles: ', articles)
  return (
    <div>
      <ItemList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/items`)
  const articles = await response.json()

  return {
    props: {
      articles
    },
  }
}


// export const getStaticProps = async () => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   )

//   const articles = await response.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }