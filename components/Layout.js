import styles from '../styles/components/Layout.module.css'

// child component of pages
export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <main>
        {children}
      </main>
    </div>
  )
}
