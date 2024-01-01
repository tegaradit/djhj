import { useLoaderData } from "react-router-dom"
import CardAbout from "../components/cardAbout"
import TitlePage from "../components/titlePage"
import UiErrorFetching from "../components/uiErrorFetching"
import ErrorLoaderApi from "../errors/errorLoaderApi"


export const About = () => {
   /**@type {Array} */
   const dataDev = useLoaderData()

   return (
      <main className="flex flex-col items-center px-4">
         <TitlePage title='Contributors' content='Website jurusan PPLG' defaultText={false} />

         <ErrorLoaderApi
            fallback={<UiErrorFetching />}
            data={dataDev}
            children={data => <CardAbout data={data} className="flex justify-evenly gap-6 flex-wrap py-4" />}
         />
      </main>
   )
}