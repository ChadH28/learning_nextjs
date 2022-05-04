import styles from '../styles/components/Layout.module.css'
import Header from './Header'
import MetaHead from './MetaHead'
import Navbar from './Navbar'

// child component of pages
export default function Layout({ children }) {
  return (
    <div>
      <MetaHead/>
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
