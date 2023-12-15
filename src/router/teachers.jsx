import { useLoaderData } from "react-router-dom"
import CardTeacher from "../components/cardTeacher"
import useFetch from "../hooks/useFetch"
import useCache from "../hooks/useCache"
import ErrorFetching from "../errors/errorFetching"


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
      <main>
         <ErrorFetching
            fallback={<h1>Error Fetching Data</h1>}
            data={dataGuru}
            children={data => <CardTeacher data={data} className="p-8 flex gap-8 justify-evenly flex-wrap" />}
         />
      </main>
   )
}