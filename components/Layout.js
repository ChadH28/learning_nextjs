import styles from '../styles/components/Layout.module.css'
import Header from './Header'
import Navbar from './Navbar'

// child component of pages
export default function Layout({ children }) {
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
        <main>
          <Header/>
          {children}
        </main>
      </div>
    </div>
  )
}
