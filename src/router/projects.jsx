import useCache from "../hooks/useCache"
import useFetch from "../hooks/useFetch"
// import { useLoaderData } from "react-router-dom"

import exampleImg from '../assets/images/card.jpg'
import CardProject from "../components/cardProject"

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
   const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

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
   ]


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
               <input type="text" placeholder="Search" className="input input-ghost w-24 md:focus:w-96 transition-[width] duration-300 md:w-56" />
               <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
         </header>

         <section className="m-8">
            <div className="rounded-box bg-base-200 w-full min-h-screen p-8">
               <CardProject data={dataProjects} className="flex justify-evenly gap-4 flex-wrap" />
            </div>
         </section>
      </main>
   )
}
