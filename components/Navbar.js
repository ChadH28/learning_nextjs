import Link from 'next/link'
import styles from '../styles/components/Navbar.module.css'

// child component of pages
export default function Layout({ children }) {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href='/'>
            Home
          </Link>
          <Link href='/about'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
