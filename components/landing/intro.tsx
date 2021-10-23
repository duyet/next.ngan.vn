import React from 'react'

import config from '../../config'

export const Intro: React.FC = () => (
  <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-10 lg:pb-20 xl:pt-40 xl:pb-40 sm:pb-50 landing-image">
    <div className="container flex flex-col items-center justify-center h-full max-w-6xl px-8 mx-auto lg:flex-row xl:px-0">
      <div className="z-30 flex flex-col justify-center items-center w-full max-w-xl mt-10 pt-36 pb-36 lg:pt-30 lg:pb-30 xl:pt-5 xl:pb-5 lg:text-center text-white">
        <h1 className="relative mb-4 text-3xl font-black leading-tight text-white sm:text-6xl xl:mb-8">
          {config.landing.h1}
        </h1>
        <p className="pr-0 mb-16 text-2xl xl:text-2xl text-white font-thin font-light text-intro-h2">
          {config.landing.h2}
        </p>
      </div>
    </div>
  </div>
)

export default Intro
