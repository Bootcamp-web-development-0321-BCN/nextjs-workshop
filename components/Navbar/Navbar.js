import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <img className={styles.logo} src="/img/logo.svg" alt="Page logo" />
      <div>
        <Link href="/about">
          <a className={styles.firstLink}>
            Sobre mí
          </a>
        </Link>
        <Link href="/projects">
          <a>
            Proyectos
          </a>
        </Link>
      </div>
    </div>
  )
}