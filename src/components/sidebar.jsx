import { useState } from "react";
import PopupNav from "./popupNav";
import useFetch from "../hooks/useFetch";
import useCookie from "../hooks/useCookie";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import useCache from "../hooks/useCache";

const Sidebar = ({ children }) => {
	const [themeWeb, setTheme] = useOutletContext().theme
	const cookie = useCookie('token')
	const cache = useCache()
	const navigate = useNavigate()

   const handdleChange = () => themeWeb == 'dark' ? setTheme('light') : setTheme('dark')

	const [sidebarOpen, setSidebarOpen] = useState(false)
	const handdleClick = () => {
		setSidebarOpen(prev => !prev)
	}

	const handdleLogout = () => {
		try {
			useFetch('https://api.pplgsmenza.id/admin/logout', 'post', null, null, cookie.isExist())
			.then(() => {
				cookie.destroy()
				cache.deleteCache('role')
				navigate('/login')
			})

		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
         <nav className={`${sidebarOpen ? 'md:left-64 md:w-[calc(100%_-_256px)]' : 'md:left-16 md:w-[calc(100%_-_64px)]'} w-full transition-[left,_width] duration-300 flex fixed z-[9999] justify-between top-0 pl-8 md:pl-0 pr-8 bg-base-300 box-border h-16 items-center`}>
				<label className="swap swap-rotate">
					<input type="checkbox" onChange={handdleClick} />
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="swap-off inline-block w-7 h-7 stroke-current">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<svg className="swap-on" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024">
						<path fill="currentColor" d="M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/>
					</svg>
				</label>

				<label className="swap swap-rotate">
					<input checked={themeWeb == 'light'} type="checkbox" onChange={handdleChange} />
					<svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
					<svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
				</label>

				<PopupNav 
					className='bg-base-300 sm:hidden block'
					isOpen={!sidebarOpen}
					content={{
						'Projects': '',
						'Prestasi': '',
						'Guru': '',
						'Portfolio': '',
						'Logout': '/login'
					}}
					windowDevision={1.7}
				/>
			</nav>

			<main>
				<aside className={`${sidebarOpen ? 'md:w-64' : 'md:w-16'} md:block hidden fixed transition=[width] duration-300 h-screen left-0 top-0 bg-base-300 px-3 py-4 overflow-hidden`}>
					<div className="border-b mb-20 border-b-base-content/50 pb-2">
						<div className="avatar placeholder whitespace-nowrap">
							<div className="bg-neutral text-neutral-content rounded-full w-10 inline-block mr-3">
								<span className="text-sm">PG</span>
							</div>
							<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} leading-10 transition-[opacity,transform] duration-300 inline-block`}>PPLGSMENZA</span>
						</div>
					</div>

					<div className="relative h-full">
						<ul>
							<li className="hover:bg-base-content/10 p-[0.4062rem] cursor-pointer transition-colors rounded-btn mb-4 whitespace-nowrap">
								<Link to='/admin/' className="block">
									<svg className="inline-block mr-3" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 256 256">
										<path fill="currentColor" d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6m-6 160H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h130Z"/>
									</svg>
									<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-[opacity,transform] duration-300 inline-block`}>Projects</span>
								</Link>
							</li>

							<li className="hover:bg-base-content/10 p-[0.4062rem] cursor-pointer transition-colors rounded-btn whitespace-nowrap mb-4">
								<Link to='/admin/teachers' className="block">
									<svg className="inline-block mr-3" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 256 256">
										<path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h13.39a4 4 0 0 0 3.61-2.29a52 52 0 0 1 94 0a4 4 0 0 0 3.61 2.29H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4h-58.92a60.38 60.38 0 0 0-34.68-29.07a36 36 0 1 0-36.8 0A60.38 60.38 0 0 0 50.92 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-116-28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m92-92v96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h12V84H68v12a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4"/>
									</svg>
									<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-[opacity,transform] duration-300 inline-block`}>Guru</span>
								</Link>
							</li>

							<li className="hover:bg-base-content/10 p-[0.4062rem] cursor-pointer transition-colors rounded-btn whitespace-nowrap mb-4">
								<Link to='/admin/about' className="block">
									<svg className="inline-block mr-3 ml-0.5" width="22" height="22" fill="currentColor" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
										<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
										<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
										<g id="SVGRepo_iconCarrier">
											<path d="M26,52A26,26,0,0,1,22.88.19,25.78,25.78,0,0,1,34.73,1.5a2,2,0,1,1-1.35,3.77,22,22,0,0,0-21,38,22,22,0,0,0,35.41-20,2,2,0,1,1,4-.48A26,26,0,0,1,26,52Z"/>
											<path d="M26,43.86a2,2,0,0,1-2-2V22.66a2,2,0,1,1,4,0v19.2A2,2,0,0,1,26,43.86Z"/>
											<circle cx="26" cy="15.71" r="2.57"/>
										</g>
									</svg>
									<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} ml-1 transition-[opacity,transform] duration-300 inline-block`}>About</span>
								</Link>
							</li>

							<li className="hover:bg-base-content/10 p-[0.4062rem] cursor-pointer transition-colors rounded-btn whitespace-nowrap mb-4">
								<svg className="inline-block mr-3" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 256 256">
									<path fill="currentColor" d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2Z"/>
								</svg>
								<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-[opacity,transform] duration-300 inline-block`}>Portfolio</span>
							</li>

							<li className="hover:bg-base-content/10 p-[0.4062rem] cursor-pointer transition-colors rounded-btn whitespace-nowrap">
								<Link to='/' className="block">
									<svg className="inline-block mr-3" viewBox="0 0 24 24" fill="none" width="27" height="27" xmlns="http://www.w3.org/2000/svg">
										<g id="SVGRepo_bgCarrier" strokeWidth="0" />
										<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
										<g id="SVGRepo_iconCarrier">
											<path d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /> 
										</g>
									</svg>
									<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-[opacity,transform] duration-300 inline-block`}>Home</span>
								</Link>
							</li>
						</ul>

						<ul className="absolute bottom-32 w-full">
							<li className="hover:bg-base-content/10 p-2 cursor-pointer transition-colors rounded-btn whitespace-nowrap">
								<button onClick={handdleLogout}>
									<svg className="inline-block mr-2" width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill="currentColor" d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z"/>
									</svg>
									<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-[opacity,transform] duration-300 inline-block`}>Logout</span>
								</button>
							</li>
						</ul>
					</div>
				</aside>

				<div className={`${sidebarOpen ? 'md:ml-48' : 'md:ml-0'} transition-[margin] duration-300 mt-16 p-0 pt-8 md:p-12 md:pl-28`}>
					{children}
				</div>
			</main>
		</>
	);
};
export default Sidebar