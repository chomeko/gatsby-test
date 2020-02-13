import React from "react"
import Header from '../commonents/header'
import Footer from '../commonents/footer'
import Styles from "../styles/index.module.sass"

export default () => (
  <div>
    <Header />
    <h2 className={Styles.test}>ここからindexになるよ</h2>
    <p>トップページ</p>
    <Footer />
  </div>
)
