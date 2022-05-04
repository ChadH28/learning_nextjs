import styles from '../styles/components/Header.module.css'

export default function Header() {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Web</span> News
      </h1>
      <p className={styles.description}>
        Keep up to date with the news
      </p>
    </div>
  )
}