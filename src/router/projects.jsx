import exampleImg from '../assets/images/card.jpg'
import { useContext, useState } from "react"
import TitlePage from "../components/titlePage"
import { AppContext } from './root'

const CardLooping = ({ item, theme }) => {
   return (
      <div title={item.judul} className="relative overflow-hidden hover:-translate-y-1 group hover:shadow-md duration-300 transition-[box-shadow,_transform] cursor-pointer w-full h-28 md:h-[7em] rounded-box bg-base-300">
         <img className="object-cover aspect-square h-full rounded-l-box float-left" src={item.thumnail} alt="" />
      
         <div className="overflow-hidden p-3 h-full relative">
            <h1 className="text-[1.15em] font-bold mb-2 text-ellipsis overflow-hidden whitespace-nowrap">{item.judul}</h1>
            <p className="text-[0.95em]">by {item.pembuat}</p>
            <p className="text-[0.95em]">{item.kelas}</p>
            <p className="text-base-content/70 text-[0.8em] text-right italic absolute bottom-3 right-3">{item.tanggalDibuat}</p>
         </div>

         <div
            className={`${theme == 'dark' ? 'group-hover:opacity-20' : 'group-hover:opacity-50'} max-md:hidden -z-10 w-96 h-56 pointer-events-none top-0 -right-14  opacity-0 transition-opacity self-center duration-500 absolute blur-md rounded-full`}
            style={{
               backgroundImage: `radial-gradient(${theme == 'dark' ? 'cyan' : '#b35cff'}, transparent 50%)`
            }}
         />
      </div>
   )
}


export const Projects = () => {
   const [theme, _] = useContext(AppContext).theme
   
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
      <main className="flex flex-col items-stretch px-4">
         <TitlePage title='Projects' content='buatan siswa' />

         <header className="self-center max-w-[76rem] w-full mt-4 mb-4">
            <div className="float-right form-control flex-row items-center bg-base-200 rounded-md w-full md:w-fit p-1 order-1 md:order-2">
               <input type="text" placeholder="Search" className="input input-ghost w-full md:focus:w-96 transition-[width] duration-300 md:w-56" />
               <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
         </header>

         <section className="self-center rounded-box bg-base-200 min-h-screen max-w-[76rem] w-full p-4">
            <div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{fontSize: 'clamp(14px, 1.5vw, 16px)'}}>
                  {dataProjects.map(item => <CardLooping item={item} key={item.id} theme={theme} />)}
               </div>
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
