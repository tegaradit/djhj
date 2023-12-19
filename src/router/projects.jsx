import useCache from "../hooks/useCache"
import useFetch from "../hooks/useFetch"
// import { useLoaderData } from "react-router-dom"

import exampleImg from '../assets/images/card.jpg'
import CardProject from "../components/cardProject"
import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import TitlePage from "../components/titlePage"

export const loaderProjects = async () => {
   const cache = useCache()

   if (!cache.getCache('dataProjects')) {
      try {
         const response = await useFetch("https://api.pplgsmenza.id/projek")
         cache.setCache('dataProjects', response)
      } catch (err) {
         return new Error(err)
      }
   }

   return cache.getCache('dataProjects')
}


export const Projects = () => {
   const [theme, _] = useOutletContext().theme

   const dataProjects = [
      {
         id: 1,
         judul: 'something-001',
         pembuat: 'person',
         kelas: 'X PPLG 7',
         tanggalDibuat: 'dd mm yyy',
         deskripsi: 'something something something something something',
         thumnail: exampleImg
      },
      {
         id: 2,
         judul: 'something-002',
         pembuat: 'person',
         kelas: 'X PPLG 7',
         tanggalDibuat: 'dd mm yyy',
         deskripsi: 'something something something something something',
         thumnail: exampleImg
      },
      {
         id: 3,
         judul: 'something-003',
         pembuat: 'person',
         kelas: 'X PPLG 7',
         tanggalDibuat: '20-12-1901',
         deskripsi: 'something something something something something',
         thumnail: exampleImg
      },
      {
         id: 4,
         judul: 'something-004',
         pembuat: 'person',
         kelas: 'X PPLG 7',
         tanggalDibuat: 'dd mm yyy',
         deskripsi: 'something something something something something',
         thumnail: exampleImg
      },
      {
         id: 5,
         judul: 'something-005',
         pembuat: 'person',
         kelas: 'X PPLG 7',
         tanggalDibuat: 'dd mm yyy',
         deskripsi: 'something something something something something',
         thumnail: exampleImg
      },
      {
         id: 6,
         judul: 'something-005',
         pembuat: 'person',
         kelas: 'X PPLG 7',
         tanggalDibuat: 'dd mm yyy',
         deskripsi: 'something something something something something',
         thumnail: exampleImg
      },
   ]

   const endPage = 20
   const [currentPage, setCurrentPage] = useState(1)
   const changePage = (option = {increment: true, decrament: false, jumpTo: NaN}) => {
      setCurrentPage(prev => Math.min(Math.max(option.jumpTo || prev + (option.increment ? 1 : -1), 1), endPage - 3))
      // option.jumpTo && console.log(`current page = ${option.jumpTo}`)
   }

   const goToPage = page => {
      // console.log(`current page = ${page}`)
   }

   return (
      <main className="flex flex-col items-stretch">
         <TitlePage title='Projects' content='buatan siswa' width={83.5} />

         <header className="self-center md:px-0 px-10 max-w-[80rem] w-full mt-4 mb-4">
            <div className="float-right form-control flex-row items-center bg-base-200 rounded-md w-full md:w-fit p-1 order-1 md:order-2">
               <input type="text" placeholder="Search" className="input input-ghost w-full md:focus:w-96 transition-[width] duration-300 md:w-56" />
               <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
         </header>

         <section className="flex justify-center">
            <div className="rounded-box bg-base-200 min-h-screen p-4 max-w-[80rem] w-full sm:p-8">
               <CardProject data={dataProjects} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" />
            </div>
         </section>

         <footer className="relative h-24">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 join h-14 px-2 gap-2 bg-base-200 items-center order-2 md:order-1">
               <button onClick={() => changePage({jumpTo: 1})} className="join-item btn btn-square btn-ghost btn-sm md:btn-md">⇦</button>
               <button onClick={() => {goToPage(currentPage); changePage({decrament: true})}} className="join-item btn btn-square btn-ghost btn-sm md:btn-md">{currentPage}</button>
               <button onClick={() => goToPage(currentPage + 1)} className="join-item btn btn-square btn-ghost btn-sm md:btn-md">{currentPage + 1}</button>
               <button onClick={() => goToPage(currentPage + 2)} className="join-item btn btn-square btn-ghost btn-sm md:btn-md">{currentPage + 2}</button>
               <button onClick={() => {goToPage(currentPage + 3); changePage({increment: true})}} className="join-item btn btn-square btn-ghost btn-sm md:btn-md">{currentPage + 3}</button>
               <button onClick={() => changePage({jumpTo: endPage})} className="join-item btn btn-square btn-ghost btn-sm md:btn-md">⇨</button>
            </div>
         </footer>
      </main>
   )
}
