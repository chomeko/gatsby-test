import React from 'react'
import Styles from "../styles/footer.module.sass"
class Footer extends React.Component {
  render() {
    return (
      <footer className={Styles.footer}>
        <h2>footerだよ</h2>
      </footer>
    );
  }
}

export default Footer;