import React from "react"
import { RESOURCES } from "@/utils/data"

export const metadata = {
  title: "Resources | Md. Asaduzzaman Akash",
  description: "Generated by create next app",
}

export default function ResourcesPage() {
  const sortedArr = RESOURCES.sort((a, b) => a.section.localeCompare(b.section))
  return (
    <main className="mx-auto w-full flex  max-w-3xl flex-1">
      <div className="pt-24 sm:pt-28 px-6 md:px-0">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent  md:pb-4 md:text-6xl text-center">
          Resources.
        </h1>
        <p className="text-md pb-4 leading-5 text-stone-100  sm:text-xl text-center">
          Here are a few resources I&#39;ve have compiled along the way that I
          reference frequently and find very useful. It&#39;s a work in
          progress.
        </p>
        <div className="mx-auto">
          <div className="text-semibold divide-y divide-stone-100 text-stone-100">
            {sortedArr.map((item, idx) => {
              const sortedSubArr = item.data.sort((a, b) =>
                a.name.localeCompare(b.name)
              )
              return (
                <details key={idx} className="group">
                  <summary className="text-secondary-900 flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium">
                    {item.section}
                    <div className="text-secondary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="text-secondary-500 pb-4">
                    <ul className="ml-8 list-disc text-stone-100 ">
                      {sortedSubArr.map((i, i_idx) => {
                        return (
                          <li key={i_idx} className="">
                            <p>
                              {" "}
                              <a
                                href={i.link}
                                target="_blank"
                                className="underline hover:text-stone-400"
                              >
                                {i.name}
                              </a>
                              {" - "}
                              {i.description}
                            </p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
