import React from 'react'
import Styles from "../styles/main.module.sass"
class Main extends React.Component {
  render() {
    return (
      <main className={Styles.test}>
        <h2>トップページだよ</h2>
      </main>
    );
  }
}

export default Main;