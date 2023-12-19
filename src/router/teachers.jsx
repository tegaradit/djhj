import { useLoaderData, useOutletContext } from "react-router-dom"
import CardTeacher from "../components/cardTeacher"
import useFetch from "../hooks/useFetch"
import useCache from "../hooks/useCache"
import ErrorFetching from "../errors/errorFetching"
import { useEffect } from "react"
import TitlePage from "../components/titlePage"


export const loaderTeacher = async () => {
   const cache = useCache()

   if (!cache.getCache('dataGuru')) {
      try {
         const response = await useFetch("https://api.pplgsmenza.id/guru")
         cache.setCache('dataGuru', response)
      } catch (err) {
         return new Error(err)
      }
   }

   return cache.getCache('dataGuru')
}


export const Teachers = () => {
   /**@type {Array} */
   const dataGuru = useLoaderData()
   
   return (
      <main className="flex flex-col justify-center items-center">
         <TitlePage title='Guru-guru' content='di Jurusan' />

         <ErrorFetching
            fallback={<h1>Error Fetching Data</h1>}
            data={dataGuru}
            children={data => <CardTeacher data={data} className="max-w-[80rem] md:mx-10 p-8 grid grid-cols-1 card-md:grid-cols-2 card-lg:grid-cols-3 gap-4" />}
         />
      </main>
   )
}