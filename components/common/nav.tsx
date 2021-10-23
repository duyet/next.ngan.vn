import React, { useState } from 'react'
import cx from 'classnames'

import { menu } from '../../config'

export const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  const navClassName =
    'absolute top-0 left-0 z-50 flex flex-col items-center justify-between w-full mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative'
  return (
    <>
      <nav id="nav" className={cx(navClassName, { hidden: !isOpen })}>
        {menu.map(({ name, href }) => {
          return (
            <a
              href={href}
              key={name}
              className="ml-0 mr-0 font-bold duration-100 pt-4 pb-4 mt-0 md:ml-3 md:mr-1 lg:mr-8 transition-color uppercase font-light font-thin text-sm"
            >
              {name}
            </a>
          )
        })}
        <div className="mb-1 md:hidden" />
      </nav>
      <div
        id="nav-mobile-btn"
        className={cx(
          'absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10',
          { close: isOpen }
        )}
        onClick={() => setOpen(!isOpen)}
      >
        <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1" />
        <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full" />
      </div>
    </>
  )
}

export default Nav
