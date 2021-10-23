import React from 'react'

import config from '../../config'

export const Intro: React.FC = () => (
  <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-10 lg:pb-20 xl:pt-40 xl:pb-40 sm:pb-50 landing-image">
    <div className="container flex flex-col items-center justify-center h-full max-w-6xl px-8 mx-auto lg:flex-row xl:px-0">
      <div className="z-30 flex flex-col justify-center items-center w-full max-w-xl pt-48 text-center lg:pt-30 mt-10 xl:pt-5 lg:text-center text-white">
        <h1 className="relative mb-4 text-3xl font-black leading-tight text-white sm:text-6xl xl:mb-8">
          {config.landing.h1}
        </h1>
        <p className="pr-0 mb-16 text-base sm:text-lg xl:text-xl text-white text-xl font-light">
          {config.landing.h2}
        </p>
      </div>
    </div>
  </div>
)

export default Intro
