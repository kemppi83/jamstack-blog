import React from 'react'
import Layout from '../components/layout'

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
          <div>
            <h1><b>Like share and subcribe</b></h1>
            <h2>About Page with some information about the amazing people that built this website</h2>
          </div>
      </Layout>
    )
  }
}

export default About
