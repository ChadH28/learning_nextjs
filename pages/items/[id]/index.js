import Link from "next/link";
import { server } from "../../../config";
import MetaHead from "../../../components/MetaHead";
import styles from '../../../styles/pages/ItemPage.module.css';

export default function Item({ article }) {
  // const router = useRouter()
  // const {id, title} = router.query

  return (
    <div className={styles.container}>
      <MetaHead 
        title={'Article | ' + article.title}
        description={article.excerpt}
      />
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go back to list</Link>
    </div>
  )
}


export const getStaticProps = async (context) => {
  const response = await fetch(
    `${server}/api/items/${context.params.id}`
  )

  const article = await response.json()

  return {
    props: {
      article
    }
  }
}


export const getStaticPaths = async () => {
  const response = await fetch(
    `${server}/api/items/`
  )

  const articles = await response.json()
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => (
    {
      params: {
        id: id.toString()
      }
    }
  ))

  return {
    paths,
    fallback: false
  }
}



// export const getStaticProps = async (context) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await response.json()

//   return {
//     props: {
//       article
//     }
//   }
// }


// export const getStaticPaths = async () => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts`
//   )

//   const articles = await response.json()
//   const ids = articles.map(article => article.id)
//   const paths = ids.map(id =>(
//     {
//       params: {
//         id: id.toString()
//       }
//     }
//   ))

//   return {
//     paths,
//     fallback: false
//   }
// }