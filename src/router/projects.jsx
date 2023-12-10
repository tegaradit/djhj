import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import useFetch from "../hooks/useFetch"

export const loaderProjects = async () => {
   console.log('api call')
   return await useFetch('https://api.pplgsmenza.id/projek/')
}

export const Projects = () => {
   const [data, _] = useState(useLoaderData())
   console.log(data)

   return (
      <main>
         <header className="flex justify-between mt-4 px-8">
            <div className="join gap-8 bg-base-200 items-center">
               <button className="join-item btn btn-square btn-ghost btn-sm">1</button>
               <button className="join-item btn btn-square btn-ghost btn-sm">2</button>
               <button className="join-item btn btn-square btn-ghost btn-sm">3</button>
               <button className="join-item btn btn-square btn-ghost btn-sm">4</button>
            </div>
            <div className="form-control flex-row items-center bg-base-200 rounded-md w-fit p-1">
               <input type="text" placeholder="Search" className="input input-ghost w-24 md:w-auto" />
               <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
         </header>

         <section className="m-8">
            <div className="rounded-box bg-base-200 w-full min-h-screen p-8">

            </div>
         </section>
      </main>
   )
}