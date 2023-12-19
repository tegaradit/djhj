import { useLoaderData } from "react-router-dom"
import useCache from "../hooks/useCache"
import useFetch from "../hooks/useFetch"
import ErrorFetching from "../errors/errorFetching"
import CardAbout from "../components/cardAbout"
import TitlePage from "../components/titlePage"

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
      <main className="flex flex-col items-center min-h-[calc(100vh_-_4.5rem)]">
         <TitlePage title='Contributors' content='Website jurusan PPLG' defaultText={false} />

         <ErrorFetching
            fallback={<h1>Error Fetching Data</h1>}
            data={dataDev}
            children={data => <CardAbout data={data} className="flex justify-evenly gap-6 flex-wrap p-6" />}
         />
      </main>
   )
}