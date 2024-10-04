import React from 'react'
import { NavLink } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-800 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <NavLink to="/">Netflix™</NavLink>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                        </svg>
                      <span className="sr-only">Facebook page</span>
                  </a>
                  <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2.163c3.205 0 3.584.012 4.85.07 1.255.058 2.082.288 2.57.61.62.407 1.09 1.004 1.487 1.726.398.726.573 1.482.63 2.625.059 1.265.069 1.644.069 4.85s-.01 3.584-.07 4.85c-.057 1.143-.232 1.899-.63 2.625-.398.722-.867 1.318-1.487 1.725-.488.323-1.315.553-2.57.61-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.255-.057-2.082-.287-2.57-.61-.62-.407-1.09-1.004-1.487-1.725-.398-.726-.573-1.482-.63-2.625-.059-1.266-.069-1.645-.069-4.85s.01-3.585.07-4.85c.057-1.143.232-1.899.63-2.625.398-.722.867-1.318 1.487-1.725.488-.323 1.315-.552 2.57-.61 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.736 0 8.332.01 7.051.07 5.759.13 4.669.367 3.755 1.028c-.884.653-1.598 1.528-2.098 2.622-.527 1.138-.709 2.354-.766 4.35-.06 1.28-.07 1.683-.07 4.85s.01 3.584.07 4.85c.057 1.996.239 3.212.766 4.35.5 1.094 1.214 1.969 2.098 2.622.914.661 2.004.898 3.296.957 1.281.06 1.685.07 4.949.07s3.668-.01 4.949-.07c1.292-.059 2.382-.296 3.296-.957.884-.653 1.598-1.528 2.098-2.622.527-1.138.709-2.354.766-4.35.06-1.266.07-1.669.07-4.85s-.01-3.584-.07-4.85c-.057-1.996-.239-3.212-.766-4.35-.5-1.094-1.214-1.969-2.098-2.622-.914-.661-2.004-.898-3.296-.957-1.281-.06-1.685-.07-4.949-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-10.844a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/>
                    </svg>
                    <span className="sr-only">Instagram page</span>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                    </svg>
                      <span className="sr-only">Twitter page</span>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                      </svg>
                      <span className="sr-only">GitHub account</span>
                  </a>
            </div>
        </div>
      </div>
    </footer>
  )
}
