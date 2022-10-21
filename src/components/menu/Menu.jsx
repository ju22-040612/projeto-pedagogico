import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'phosphor-react'
import styles from './menu.module.css'


function Menu() {
  const [open, setOpen] = useState(false)

  function handleMenu() {
    open ? setOpen(false) :  setOpen(true)
  }

  return(
    <nav>
      <List size={32} isOpen={open} onClick={handleMenu} className={styles.hamburguer} />
      <ul className={open ? styles.hamburguerOpen : styles.menu}>
          <li className={open ? styles.itemOpen : styles.item}>
          <Link  className={open ? styles.linkOpen : styles.link} to="/">Home</Link>
        </li>
          <li className={open ? styles.itemOpen : styles.item}>
          <Link  className={open ? styles.linkOpen : styles.link} to="/sobre">Sobre</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/justificativa">Justificativa</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/objetivo">Objetivo</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/teoria">Teoria</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/historiasContos">HistoriasContos</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/oficinas">Oficinas</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu