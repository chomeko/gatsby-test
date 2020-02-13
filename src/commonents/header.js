import React from 'react'
import Styles from "../styles/header.module.sass"
import { Link } from 'gatsby'

export default () => (
  <header className={Styles.header}>
    <h1>headerだよ</h1>
    <ul className={Styles.header__ul}>
      <li className={Styles.header__li}><Link to="/">Home </Link></li>
      <li className={Styles.header__li}><Link to="/about/">About</Link></li>
    </ul>
  </header>
)