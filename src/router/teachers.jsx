import { useLoaderData } from "react-router-dom"
import CardTeacher from "../components/cardTeacher"
import TitlePage from "../components/titlePage"
import UiErrorFetching from "../components/uiErrorFetching"
import ErrorLoaderApi from "../errors/errorLoaderApi"

export const Teachers = () => {
   /**@type {Array} */
   const dataGuru = useLoaderData()
   
   return (
      <main className="flex flex-col justify-center items-center">
         <TitlePage title='Guru-guru' content='di Jurusan' />

         <ErrorLoaderApi
            fallback={<UiErrorFetching />}
            data={dataGuru}
            children={data => <CardTeacher data={data} className="max-w-[80rem] md:mx-10 p-8 grid grid-cols-1 card-md:grid-cols-2 card-lg:grid-cols-3 gap-4" />}
         />
      </main>
   )
}