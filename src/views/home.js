import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Security Representative</title>
        <meta property="og:title" content="Product Security Representative" />
      </Helmet>
    </div>
  )
}

export default Home
