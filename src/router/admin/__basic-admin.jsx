import { useContext, useRef, useState } from 'react'
import exampleImg from '../../assets/images/card.jpg'
import SubPage from '../../components/subPage'
import { Form } from 'react-router-dom'
import { AppContext } from '../root'

const Addprojects = () => {
   const [theme, _] = useContext(AppContext).theme
	const inputRef = useRef()
   // const date = new Date()
   const [previewImg, setPreviewImg] = useState(null)
   const deleteImg = () => {
      setPreviewImg(null)
   }
   const upload = (files) => {
         const image = files[0];
         setPreviewImg(image)
   };

   // Input manual
   const handleButtonClick = () => {
         if (inputRef.current) {
            inputRef.current.click();
         }
   };

   // Input drag'n drop
   const [dragging, setDragging] = useState(false);
   const handleDragEnter = (e) => {
         e.preventDefault();
         setDragging(true);
   };
   const handleDragLeave = () => {
         setDragging(false);
   };
   const handleDragOver = (e) => {
         e.preventDefault();
   };
   const handleDrop = (e) => {
         e.preventDefault();
         setDragging(false);
         const files = [...e.dataTransfer.files];
         upload(files);
   };

	return (
		<div className="max-w-4xl w-full">
			<h1 className="text-3xl text-center mb-4">Tambah Project</h1>
			<Form method="post" className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-10">
				<div>
					<label className="block text-base-content/90 text-sm" htmlFor="link-project">Link Project</label>
					<input className="w-full px-2 py-1 rounded-lg" required type="text" name="link-project" />
				</div>

				<div>
					<label className="block text-base-content/90 text-sm" htmlFor="judul-project">Judul Project</label>
					<input className="w-full px-2 py-1 rounded-lg" required type="text" name="judul-project" />
				</div>

				<div>
					<label className="block text-base-content/90 text-sm" htmlFor="deskripsi-project">Deskripsi Project</label>
					<textarea className="w-full p-2 resize-none rounded-lg" rows={8} required type="text" name="deskripsi-project" />
				</div>

				<div className="h-full">
					<label className="block text-base-content/90 text-sm" htmlFor="thumnail-project">Thumnail Project</label>
					<div 
						className={`${theme == 'dark' ? 'bg-[#3B3B3B]' : 'bg-white'} ${dragging ? 'border' : ''} overflow-hidden relative w-full h-[24.1ch] leading-[24.1ch] text-center cursor-pointer rounded-lg`}
						onDragEnter={handleDragEnter}
						onDragLeave={handleDragLeave}
						onDragOver={handleDragOver}
						onDrop={handleDrop}
						onClick={handleButtonClick}
					>
						{dragging ? <span>Jatuhkan Gambar</span> : <span>click atau Drag'n Drop Gambar</span>}
						
						<input onChange={e => upload(e.target.files)} ref={inputRef} className="w-full px-2 py-1 rounded-lg" accept=".jpg,.jpeg,.png,.webp" required type="file" hidden name="thumnail-project" />
						{previewImg ? <img className={`${dragging ? 'opacity-10' : 'opacity-100'} w-full h-full object-cover absolute top-0 hover:opacity-10 transition-opacity duration-300`} src={URL.createObjectURL(previewImg)} /> : ''}
					</div>
				</div>

				<div>
					<label className="block text-base-content/90 text-sm" htmlFor="nama-pembuat">Nama Pembuat</label>
					<input className="w-full px-2 py-1 rounded-lg" required type="text" name="nama-pembuat" />
				</div>

				<div>
					<label className="block text-base-content/90 text-sm" htmlFor="kelas">Kelas</label>
					<select className="rounded-lg px-2 py-1 w-full" name="kelas">
						<option value="undefined" defaultValue='undefined'>pilih kelas</option>
						<option value="X PPLG 1">X PPLG 1</option>
						<option value="X PPLG 2">X PPLG 2</option>
						<option value="XI PPLG 1">XI PPLG 1</option>
						<option value="XI PPLG 2">XI PPLG 2</option>
						<option value="XII PPLG 1">XII PPLG 1</option>
						<option value="XII PPLG 2">XII PPLG 2</option>
					</select>
				</div>

				{/* <input value={date.toUTCString()} type="text" name="upload-date" hidden /> */}

				<div className="md:px-20 mt-10 flex gap-4 md:col-span-2">
					<input type="button" onClick={() => deleteImg()} id='exit-sub-page' value='Batal' className="btn btn-outline btn-error btn-sm grow" />
					<input type="submit" value='Tambah' className="btn btn-outline btn-sm btn-primary grow" />
				</div>
			</Form>
		</div>
	)
}

const EditProjects = ({ data }) => {
	const [theme, _] = useContext(AppContext).theme
	const inputRef = useRef()
   // const date = new Date()

   const [previewImg, setPreviewImg] = useState(true)
   const deleteImg = () => {
      setPreviewImg(null)
   }
   const upload = (files) => {
         const image = files[0];
         setPreviewImg(image)
   };

   // Input manual
   const handleButtonClick = () => {
         if (inputRef.current) {
            inputRef.current.click();
         }
   };

   // Input drag'n drop
   const [dragging, setDragging] = useState(false);
   const handleDragEnter = (e) => {
         e.preventDefault();
         setDragging(true);
   };
   const handleDragLeave = () => {
         setDragging(false);
   };
   const handleDragOver = (e) => {
         e.preventDefault();
   };
   const handleDrop = (e) => {
         e.preventDefault();
         setDragging(false);
         const files = [...e.dataTransfer.files];
         upload(files);
   };

	return (
		<div className="max-w-4xl w-full">
			<h1 className="text-3xl text-center mb-4">Edit Project</h1>
			<Form method="post" className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-10">
				<div>
					<label className="block text-base-content/90 text-sm" htmlFor="link-project">Link Project</label>
					<input value={data.projectLink} className="w-full px-2 py-1 rounded-lg" required type="text" name="link-project" />
				</div>

				<div>
					<label className="block text-base-content/90 text-sm" htmlFor="judul-project">Judul Project</label>
					<input value={data.projectName} className="w-full px-2 py-1 rounded-lg" required type="text" name="judul-project" />
				</div>

				<div>
					<label className="block text-base-content/90 text-sm" htmlFor="deskripsi-project">Deskripsi Project</label>
					<textarea value={data.description} className="w-full p-2 resize-none rounded-lg" rows={8} required type="text" name="deskripsi-project" />
				</div>

				<div className="h-full">
					<label className="block text-base-content/90 text-sm" htmlFor="thumnail-project">Thumnail Project</label>
					<div 
						className={`${theme == 'dark' ? 'bg-[#3B3B3B]' : 'bg-white'} ${dragging ? 'border' : ''} overflow-hidden relative w-full h-[24.1ch] leading-[24.1ch] text-center cursor-pointer rounded-lg`}
						onDragEnter={handleDragEnter}
						onDragLeave={handleDragLeave}
						onDragOver={handleDragOver}
						onDrop={handleDrop}
						onClick={handleButtonClick}
					>
						{dragging ? <span>Jatuhkan Gambar</span> : <span>click atau Drag'n Drop Gambar</span>}
						
						<input onChange={e => upload(e.target.files)} ref={inputRef} className="w-full px-2 py-1 rounded-lg" accept=".jpg,.jpeg,.png,.webp" required type="file" hidden name="thumnail-project" />
						{previewImg ? <img className={`${dragging ? 'opacity-10' : 'opacity-100'} w-full h-full object-cover absolute top-0 hover:opacity-10 transition-opacity duration-300`} src={previewImg instanceof Blob ? URL.createObjectURL(previewImg) : data.thumbnail} /> : ''}
					</div>
				</div>

				<div>
					<label className="block text-base-content/90 text-sm" htmlFor="nama-pembuat">Nama Pembuat</label>
					<input value={data.creator} className="w-full px-2 py-1 rounded-lg" required type="text" name="nama-pembuat" />
				</div>

				<div>
					<label className="block text-base-content/90 text-sm" htmlFor="kelas">Kelas</label>
					<select className="rounded-lg px-2 py-1 w-full" name="kelas">
						<option value="undefined" defaultValue='undefined'>pilih kelas</option>
						<option value="X PPLG 1">X PPLG 1</option>
						<option value="X PPLG 2">X PPLG 2</option>
						<option value="XI PPLG 1">XI PPLG 1</option>
						<option value="XI PPLG 2">XI PPLG 2</option>
						<option value="XII PPLG 1">XII PPLG 1</option>
						<option value="XII PPLG 2">XII PPLG 2</option>
					</select>
				</div>

				{/* <input value={date.toUTCString()} type="text" name="upload-date" hidden /> */}

				<div className="md:px-20 mt-10 flex gap-4 md:col-span-2">
					<input type="button" id='exit-sub-page' value='Batal' className="btn btn-outline btn-error btn-sm grow" />
					<input type="submit" value='Ubah' className="btn btn-outline btn-sm btn-primary grow" />
				</div>
			</Form>
		</div>
	)
}

export default () => {
	const [open, setOpen] = useState({isOpen: false, clientRect: null})
	const [editOpen, setEditOpen] = useState({isOpen: false, clientRect: null})

	const [dataSelected, setDataSelected] = useState(NaN)

	const exampleData = [
		{
			id: '001',
			projectLink: 'https://www.example.com',
			projectName: 'experiment',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.`,
			thumbnail: exampleImg,
			creator: 'somepeople',
			class: 'VIII A',
			createdAt: 'March 21, 2023, 12:54',
		},
		{
			id: '002',
			projectLink: 'https://www.example.com',
			projectName: 'experiment',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.
			`,
			thumbnail: exampleImg,
			creator: 'somepeople',
			class: 'VIII A',
			createdAt: 'March 21, 2023, 12:54',
		},
		{
			id: '003',
			projectLink: 'https://www.example.com',
			projectName: 'experiment',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.
			`,
			thumbnail: exampleImg,
			creator: 'somepeople',
			class: 'VIII A',
			createdAt: 'March 21, 2023, 12:54',
		},
		{
			id: '004',
			projectLink: 'https://www.example.com',
			projectName: 'experiment',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor nostrum hic tempore eaque, sapiente vitae iusto blanditiis nam quos? Inventore accusamusminus laborum ullam. Voluptates minima eos amet omnis.
			`,
			thumbnail: exampleImg,
			creator: 'somepeople',
			class: 'VIII A',
			createdAt: 'March 21, 2023, 12:54',
		},
	]

	return (
		<div style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
			<div onClick={ev => setOpen({isOpen: true, clientRect: ev.target.querySelector('svg').getBoundingClientRect()})} className="mb-8 rounded-badge bg-base-300/50 w-24 cursor-pointer h-10 flex items-center gap-2 max-lg:ml-6">
				<div className="Opointer-events-none rounded-full bg-base-content/10 p-2 w-fit">
					<svg className='pointer-events-none' width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M28 15.996H16V27.996H12V15.996H0V11.996H12V-0.00402832H16V11.996H28V15.996Z" fill="currentColor"/>
					</svg>
				</div>
				<button className='pointer-events-none'>Add</button>
			</div>

			<SubPage trigert={[open, setOpen]} className='flex justify-center p-10'>
				<Addprojects />
			</SubPage>

			<SubPage trigert={[editOpen, setEditOpen]} className='flex justify-center p-10'>
				<EditProjects data={exampleData[dataSelected]} />
			</SubPage>

			<div className="w-full bg-base-200 rounded-box min-h-screen p-4">
				<table className="w-full text-center max-lg:hidden">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Class</th>
							<th>Creator</th>
							<th>Created At</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{exampleData.map((el, ix) => {
							return (
								<tr key={el.id}>
									<td className='px-3'>{el.id}</td>
									<td className='px-3'>{el.projectName}</td>
									<td className='px-3'>{el.class}</td>
									<td className='px-3'>{el.creator}</td>
									<td className='px-3'>{el.createdAt}</td>
									<td>
										<div className="dropdown">
											<div tabIndex={0} role="button" className="btn m-1">Action</div>
											<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
												<li><button onClick={ev => {setEditOpen({isOpen: true, clientRect: ev.target.getBoundingClientRect()}); setDataSelected(ix)} } className="btn btn-success btn-sm h-0 text-sm h-min-0 p-0 mb-4 w-20">Edit</button></li>
												<li><button className="btn btn-error btn-sm h-0 text-sm h-min-0 p-0 w-20">Delete</button></li>
											</ul>
										</div>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>

				<div className='grid grid-cols-1 [@media_only_screen_and_(min-width:_500px)]:grid-cols-2 gap-4 lg:hidden'>
					{exampleData.map((el, ix) => {
						return (
							<div key={el.id} title='Pembuatan Game Edukasi 2D P5' className='relative group bg-base-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[box-shadow,_transform] duration-300 rounded-box overflow-hidden whitespace-nowrap'>
								<button onClick={ev => {setEditOpen({isOpen: true, clientRect: ev.target.getBoundingClientRect()}); setDataSelected(ix)} } title='edit' className='group-hover:inline-flex hidden btn btn-ghost rounded-full btn-square z-10 absolute'>
									<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white">
										<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
										<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
										<g id="SVGRepo_iconCarrier">
											{/* <path opacity="0.15" d="M4 20H8L18 10L14 6L4 16V20Z" fill="#ffffff"/> */}
											<path d="M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="white" strokeWidth="0.696" strokeLinecap="round" strokeLinejoin="round"/>
										</g>
									</svg>
								</button>
								<button title='delete' className='group-hover:inline-flex hidden btn btn-ghost rounded-full btn-square z-10 absolute right-0'>
									<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
										<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
										<g id="SVGRepo_iconCarrier">
											<path d="M4 7H20" stroke="white" strokeWidth="0.672" strokeLinecap="round" strokeLinejoin="round"/> 
											<path d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10" stroke="white" strokeWidth="0.672" strokeLinecap="round" strokeLinejoin="round"/> 
											<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="white" strokeWidth="0.672" strokeLinecap="round" strokeLinejoin="round"/> 
										</g>
									</svg>
								</button>

								<img className='group-hover:brightness-50 transition-[filter] duration-300' src={el.thumbnail} />
								<div className="m-4 overflow-hidden">
									<p className='text-xl font-bold text-ellipsis overflow-hidden'>{el.projectName}</p>
									<p className='text-ellipsis overflow-hidden'><span className='font-medium'>By</span> {el.creator} <span className='font-medium'>|</span> {el.class}</p>
									<div className="relative">
										<p className='h-20 whitespace-normal overflow-hidden mt-3'>
											{el.description}
										</p>
										<div className='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-base-100 to-transparent' />
									</div>
									<p className='text-sm text-base-content/80 mt-6'>{el.createdAt}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}