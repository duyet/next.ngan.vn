import React from 'react'

import { menu } from '../../config'

export const Nav = () => (
  <nav
    id="nav"
    className="relative top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative"
  >
    {menu.map(({ name, href }) => {
      return (
        <a
          href={href}
          key={name}
          className="ml-0 mr-0 font-bold duration-100 md:ml-3 md:mr-1 lg:mr-8 transition-color uppercase font-light"
        >
          {name}
        </a>
      )
    })}
  </nav>
)

export default Nav
