import styles from '../styles/components/ItemList.module.css'
import Item from './Item'

// passing down article prop
export default function ItemList({articles}) {
  return (
    <div className={styles.grid}>
      {
        articles.map(
          (article, {id}) => (
            <Item article={article} key={id}/>
          )
        )
      }
    </div>
  )
}