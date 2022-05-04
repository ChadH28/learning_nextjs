import Link from 'next/link'
import styles from '../styles/components/Item.module.css'

export default function Item({ article }) {
  return (
    // getting page path 
    <Link href='/item/[id]' as={`/item/${article.id}`}>
      <a className={styles.card}>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}