import { Link } from "react-router-dom"
import { useTitle } from "../hooks"

export const PageNotFound = () => {
  const pageTitle = useTitle("Page Not Found");

  return (
    <main class="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <section>
        <div className="text-center">
          <p className="text-4xl font-bold text-red-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-200">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/" className="rounded-md bg-red-600 px-2.5 py-3.5 text-md font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Go back home
            </Link>
          </div>
        </div>
      </section>
     
    </main>
  )
}
