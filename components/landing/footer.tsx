import React from 'react'

import config from '../../config'

export const Footer: React.FC = () => (
  <div className="flex flex-col w-full text-gray-700 flex items-center mt-10">
    <div className="flex justify-start pl-4 mt-2">
      <a
        className="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
        target="_blank"
        rel="noopener noreferrer"
        href={config.facebook}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
        </svg>
      </a>
      <a
        className="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
        target="_blank"
        rel="noopener noreferrer"
        href={config.twitter}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
        </svg>
      </a>
    </div>
  </div>
)

export default Footer
