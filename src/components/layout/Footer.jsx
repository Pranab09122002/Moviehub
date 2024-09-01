import React from 'react'
import logo from "./Ui/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <a href="" className="flex items-center">
          <img
            src={logo}
            className="h-8 me-3"
            alt="FlowBite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MovieTube
          </span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Resources
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="https://spotify-tukai.netlify.app/" className="hover:underline">
                spotify
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" className="hover:underline">
                Tailwind CSS
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Follow us
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Legal
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
      <div className="flex mt-4 sm:justify-center sm:mt-0">
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Facebook page</span>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 21 16"
          >
            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
          </svg>
          <span className="sr-only">Discord community</span>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 17"
          >
            <path
              fillRule="evenodd"
              d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Twitter page</span>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.167 6.839 9.491.5.092.683-.216.683-.481 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.151-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.528 2.341 1.087 2.91.832.092-.647.349-1.087.634-1.338-2.221-.252-4.555-1.11-4.555-4.944 0-1.092.39-1.985 1.029-2.683-.103-.253-.447-1.271.099-2.65 0 0 .84-.27 2.75 1.024A9.53 9.53 0 0 1 10 5.675c.851.004 1.707.115 2.506.338 1.908-1.293 2.746-1.024 2.746-1.024.548 1.379.204 2.397.1 2.65.64.698 1.027 1.59 1.027 2.683 0 3.843-2.337 4.687-4.566 4.934.359.307.678.917.678 1.851 0 1.335-.012 2.415-.012 2.742 0 .268.18.579.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">GitHub account</span>
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer