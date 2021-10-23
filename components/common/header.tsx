import React from 'react'
import Link from 'next/link'

import Nav from './nav'
import Logo from './logo'

export const Header: React.FC = () => (
  <header className="relative z-50 w-full h-24">
    <div className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
      <Link href="/">
        <a className="relative flex items-center inline-block h-5 h-full font-black leading-none w-auto">
          <Logo />
        </a>
      </Link>

      <Nav />

      <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
        <a
          href="#_"
          className="relative z-40 px-3 py-2 mr-0 text-sm font-bold text-pink-500 md:px-5 sm:mr-3 md:mt-0"
        ></a>
      </div>
    </div>
  </header>
)

export default Header
