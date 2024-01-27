import { useState } from "react"
import { Form, useLoaderData } from "react-router-dom"
import UiErrorFetching from "../../../components/uiErrorFetching"
import SubPage from "../../../components/subPage"
import InputImage from "../../../components/inputImage"
import ErrorLoaderApi from "../../../errors/errorLoaderApi"

const CardLooping = ({ data, setter, setSelectedId }) => {
   return (
      <div className="flex justify-around gap-6 flex-wrap mt-8">
         {data.map((el, ix) => (
            <div key={el.id} className="relative shadow-lg flex flex-col justify-center items-center w-96 rounded-xl">
               <div className="dropdown dropdown-bottom dropdown-end absolute right-2 top-2">
                  <div className="tooltip" data-tip="more actions">
                     <svg tabIndex={0} role="btn" className="w-6 h-6 cursor-pointer group" title="more action" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                           <path className="stroke-base-content/50 group-hover:stroke-current" d="M6.5 10.32C8.433 10.32 10 8.753 10 6.82001C10 4.88701 8.433 3.32001 6.5 3.32001C4.567 3.32001 3 4.88701 3 6.82001C3 8.753 4.567 10.32 6.5 10.32Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           <path className="stroke-base-content/50 group-hover:stroke-current" d="M17.5 10.32C19.433 10.32 21 8.753 21 6.82001C21 4.88701 19.433 3.32001 17.5 3.32001C15.567 3.32001 14 4.88701 14 6.82001C14 8.753 15.567 10.32 17.5 10.32Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           <path className="stroke-base-content/50 group-hover:stroke-current" d="M6.5 21.32C8.433 21.32 10 19.753 10 17.82C10 15.887 8.433 14.32 6.5 14.32C4.567 14.32 3 15.887 3 17.82C3 19.753 4.567 21.32 6.5 21.32Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           <path className="stroke-base-content/50 group-hover:stroke-current" d="M17.5 21.32C19.433 21.32 21 19.753 21 17.82C21 15.887 19.433 14.32 17.5 14.32C15.567 14.32 14 15.887 14 17.82C14 19.753 15.567 21.32 17.5 21.32Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                     </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-fit">
                     <li>
                        <a onClick={ev => {setter({isOpen: true, clientRect: ev.target.getBoundingClientRect()}); setSelectedId(ix)}} className="text-success">Edit</a>
                     </li>
                     <li>
                        <a className="text-error">Delete</a>
                     </li>
                  </ul>
               </div>

               <img src={el.foto_profil} className="object-cover w-24 h-24 rounded-full" />

               <div className="mt-8 text-center p-4 bg-base-200 w-full h-40 rounded-b-xl">
                  <h3 className="font-bold text-[1.3em]">{el.nama}</h3>

                  <p className="text-base-content/70 mb-4">{el.jabatan}</p>
                  <p>{el.mapel}</p>
               </div>
            </div>
         ))}
      </div>
   )
}

const SubpageContent = ({ data }) => {

   return (
      <div>
         <Form method="post" className="w-[27rem] flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold self-start">Edit</h1>

            <div className="w-36 h-36 rounded-full">
					<InputImage name="foto-profil" className="bg-base-100 w-full h-full rounded-full leading-[9rem]" text={data ? "Ganti Foto" : "Masukan Foto"} fallbackImagePreview={data ? data.foto_profil : null} />
				</div>

            <div className="w-full">
               <label className="block" htmlFor="nama">nama</label>
               <input className="px-2 py-1 rounded-md text-lg w-full" type="text" name="nama" />
            </div>

            <div className="w-full">
               <label className="block" htmlFor="jabatan">jabatan</label>
               <input className="px-2 py-1 rounded-md text-lg w-full" type="text" name="jabatan" />
            </div>

            <div className="w-full">
               <label className="block" htmlFor="mapel">mapel</label>
               <input className="px-2 py-1 rounded-md text-lg w-full" type="text" name="mapel" />
            </div>

            <div className="w-full">
               <label className="block" htmlFor="moto-hidup">moto hidup</label>
               <input className="px-2 py-1 rounded-md text-lg w-full" type="text" name="moto-hidup" />
            </div>

            <div className="w-full">
               <label className="block" htmlFor="sosmed">sosial media</label>
               <input className="px-2 py-1 rounded-md text-lg w-full" type="text" name="sosmed" />
            </div>

            <div className="w-full">
               <label className="block" htmlFor="hobby">hobby</label>
               <textarea className="resize-none w-full px-2 py-1 text-lg" rows={5} type="text" name="hobby" />
            </div>

            <div className="w-full flex gap-4">
               <button className="grow btn btn-sm btn-outline btn-error" id='exit-sub-page' onClick={e => e.preventDefault()}>Batal</button>
               <input className="grow btn btn-sm btn-outline btn-primary" type="submit" value={data ? "Edit" : "Tambah"} />
            </div>
         </Form>
      </div>
   )
}

export default () => {
   const dataGuru = useLoaderData()
   const [open, setOpen] = useState({isOpen: false, clientRect: null})
   const [addPageOpen, setAddPageOpen] = useState({isOpen: false, clientRect: null})
   const [idSelectred, setIdSelected] = useState(NaN)

   return (
      <main style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
         <div onClick={ev => setAddPageOpen({isOpen: true, clientRect: ev.target.querySelector('svg').getBoundingClientRect()})} className="mb-8 rounded-badge bg-base-300/50 w-24 cursor-pointer h-10 flex items-center gap-2 max-lg:ml-6">
				<div className="Opointer-events-none rounded-full bg-base-content/10 p-2 w-fit">
					<svg className='pointer-events-none' width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M28 15.996H16V27.996H12V15.996H0V11.996H12V-0.00402832H16V11.996H28V15.996Z" fill="currentColor"/>
					</svg>
				</div>
				<button className='pointer-events-none'>Add</button>
			</div>

         <SubPage trigert={[addPageOpen, setAddPageOpen]} className='flex justify-center p-10'>
            <SubpageContent />
         </SubPage>

         <ErrorLoaderApi 
            data={dataGuru}
            fallback={<UiErrorFetching />}
            childern={data => (
               <>
                  <CardLooping data={data} setter={setOpen} setSelectedId={setIdSelected} />
                  
                  <SubPage trigert={[open, setOpen]} className='flex justify-center p-10'>
                     <SubpageContent data={data[idSelectred]} />
                  </SubPage>
               </>
            )}
         />
      </main>
   )
}