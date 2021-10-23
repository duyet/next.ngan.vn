import React from 'react'
import { NextPage } from 'next'

import Header from '../components/common/header'
import Intro from '../components/landing/intro'
import Footer from '../components/landing/footer'

const Landing: NextPage = () => {
  return (
    <div className="p-0 m-0 h-screen min-h-screen">
      <Header />
      <Intro />
      <Footer />
    </div>
  )
}

export default Landing
