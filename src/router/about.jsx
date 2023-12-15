import { useLoaderData } from "react-router-dom"
import useCache from "../hooks/useCache"
import useFetch from "../hooks/useFetch"
import ErrorFetching from "../errors/errorFetching"
import CardAbout from "../components/cardAbout"

export const loaderDev = async () => {
   const cache = useCache()

   if (!cache.getCache('dataDev')) {
      try {
         const response = await useFetch("https://api.pplgsmenza.id/pengembang/")
         cache.setCache('dataDev', response)
      } catch (err) {
         return new Error(err)
      }
   }

   return cache.getCache('dataDev')
}


export const About = () => {
   /**@type {Array} */
   const dataDev = useLoaderData()

   return (
      <ErrorFetching 
         fallback={<h1>Error Fetching Data</h1>}
         data={dataDev}
         children={data => <CardAbout data={data} />}
      />
   )
}