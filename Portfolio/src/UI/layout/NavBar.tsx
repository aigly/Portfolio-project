import { useState } from 'react'
import styles from '../styles/NavBar.module.css'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.topBar}>
        <h2 className={styles.logo}>Airat Nizamov</h2>

        <div
          className={styles.burger}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </div>


      <ul className={`${styles.navLinks} ${open ? styles.active : ''}`}>
        <li><a href="#hero" onClick={() => setOpen(false)}>Главная</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Навыки</a></li>
        <li><a href="#Portfolio" onClick={() => setOpen(false)}>Портфолио</a></li>
        <li><a href="#benefits" onClick={() => setOpen(false)}>Чем я могу быть полезен</a></li>
      </ul>
        </div>
    </nav>
  )
}
