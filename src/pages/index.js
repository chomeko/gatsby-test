import React from "react"
import Header from '../commonents/header'
import Footer from '../commonents/footer'
import Main from '../commonents/main'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Index;