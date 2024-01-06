import exampleImg from '../../assets/images/card.jpg'

export default () => {
	return (
		<div style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
			<div className="mb-8 rounded-badge bg-base-300/50 w-24 cursor-pointer h-10 flex items-center gap-2 max-lg:ml-6">
				<div className="rounded-full bg-base-content/10 p-2 w-fit">
					<svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M28 15.996H16V27.996H12V15.996H0V11.996H12V-0.00402832H16V11.996H28V15.996Z" fill="currentColor"/>
					</svg>
				</div>
				<p>Add</p>
			</div>

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
						<tr>
							<td className='px-3'>0001</td>
							<td className='px-3'>Pembuatan Game Edukasi 2D P5</td>
							<td className='px-3'>XI PPLG 1</td>
							<td className='px-3'>Billie Eilish</td>
							<td className='px-3'>March 21, 2023, 12:54</td>
							<td>
								<div className="dropdown">
									<div tabIndex={0} role="button" className="btn m-1">Action</div>
									<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
										<li><button className="btn btn-success btn-sm h-0 text-sm h-min-0 p-0 mb-4 w-20">Edit</button></li>
										<li><button className="btn btn-error btn-sm h-0 text-sm h-min-0 p-0 w-20">Delete</button></li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td className='px-3'>0001</td>
							<td className='px-3'>Pembuatan Game Edukasi 2D P5</td>
							<td className='px-3'>XI PPLG 1</td>
							<td className='px-3'>Billie Eilish</td>
							<td className='px-3'>March 21, 2023, 12:54</td>
							<td>
								<div className="dropdown">
									<div tabIndex={0} role="button" className="btn m-1 z-0">Action</div>
									<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
										<li><button className="btn btn-success btn-sm h-0 text-sm h-min-0 p-0 mb-4 w-20">Edit</button></li>
										<li><button className="btn btn-error btn-sm h-0 text-sm h-min-0 p-0 w-20">Delete</button></li>
									</ul>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

				<div className='grid grid-cols-1 [@media_only_screen_and_(min-width:_480px)]:grid-cols-2 gap-4 lg:hidden'>

					<div title='Pembuatan Game Edukasi 2D P5' className='relative group bg-base-content/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[box-shadow,_transform] duration-300 rounded-box overflow-hidden whitespace-nowrap'>
						<button title='edit' className='group-hover:inline-flex hidden btn btn-ghost rounded-full btn-square z-10 absolute'>
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

						<img className='group-hover:brightness-50 transition-[filter] duration-300' src={exampleImg} />
						<div className="m-4 overflow-hidden">
							<p className='text-xl font-bold text-ellipsis overflow-hidden'>Pembuatan Game Edukasi 2D P5</p>
							<p><span className='font-medium'>By</span> Billie Eilish <span className='font-medium'>|</span> XI PPLG 1</p>
							<p className='text-sm text-base-content/80 mt-6'>March 21, 2023, 12:54</p>
						</div>
					</div>
					
					<div title='Pembuatan Game Edukasi 2D P5' className='relative group bg-base-content/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[box-shadow,_transform] duration-300 rounded-box overflow-hidden whitespace-nowrap'>
						<button title='edit' className='group-hover:inline-flex hidden btn btn-ghost rounded-full btn-square z-10 absolute'>
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

						<img className='group-hover:brightness-50 transition-[filter] duration-300' src={exampleImg} />
						<div className="m-4 overflow-hidden">
							<p className='text-xl font-bold text-ellipsis overflow-hidden'>Pembuatan Game Edukasi 2D P5</p>
							<p><span className='font-medium'>By</span> Billie Eilish <span className='font-medium'>|</span> XI PPLG 1</p>
							<p className='text-sm text-base-content/80 mt-6'>March 21, 2023, 12:54</p>
						</div>
					</div>
					
					<div title='Pembuatan Game Edukasi 2D P5' className='relative group bg-base-content/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[box-shadow,_transform] duration-300 rounded-box overflow-hidden whitespace-nowrap'>
						<button title='edit' className='group-hover:inline-flex hidden btn btn-ghost rounded-full btn-square z-10 absolute'>
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

						<img className='group-hover:brightness-50 transition-[filter] duration-300' src={exampleImg} />
						<div className="m-4 overflow-hidden">
							<p className='text-xl font-bold text-ellipsis overflow-hidden'>Pembuatan Game Edukasi 2D P5</p>
							<p><span className='font-medium'>By</span> Billie Eilish <span className='font-medium'>|</span> XI PPLG 1</p>
							<p className='text-sm text-base-content/80 mt-6'>March 21, 2023, 12:54</p>
						</div>
					</div>

					<div title='Pembuatan Game Edukasi 2D P5' className='relative group bg-base-content/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[box-shadow,_transform] duration-300 rounded-box overflow-hidden whitespace-nowrap'>
						<button title='edit' className='group-hover:inline-flex hidden btn btn-ghost rounded-full btn-square z-10 absolute'>
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

						<img className='group-hover:brightness-50 transition-[filter] duration-300' src={exampleImg} />
						<div className="m-4 overflow-hidden">
							<p className='text-xl font-bold text-ellipsis overflow-hidden'>Pembuatan Game Edukasi 2D P5</p>
							<p><span className='font-medium'>By</span> Billie Eilish <span className='font-medium'>|</span> XI PPLG 1</p>
							<p className='text-sm text-base-content/80 mt-6'>March 21, 2023, 12:54</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}