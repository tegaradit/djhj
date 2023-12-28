import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const Sidebar = ({ childern }) => {
	const [themeWeb, setTheme] = useOutletContext()['theme']   
   const handdleChange = () => {
      themeWeb == 'dark' ? setTheme('light') : setTheme('dark')
   }

	const [sidebarOpen, setSidebarOpen] = useState(false)
	const handdleClick = () => {
		setSidebarOpen(prev => !prev)
	}

	return (
		<div className="sticky top-0 bg-red-500/50">
         <nav className={`${sidebarOpen ? 'left-64 w-[calc(100%_-_256px)]' : 'left-16 w-[calc(100%_-_64px)]'} transition-[left,_width] duration-300 flex absolute z-[9999] justify-between top-0 pr-8 bg-base-300 box-border h-16 items-center`}>
				<label className="swap swap-rotate">
					<input type="checkbox" onChange={handdleClick} />
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="swap-off inline-block w-7 h-7 stroke-current">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
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
			</nav>

			<aside className={`${sidebarOpen ? 'w-64' : 'w-16'} transition=[width] duration-300 h-screen left-0 top-0 bg-base-300 px-3 py-4 overflow-hidden`}>
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
							<svg className="inline-block mr-3" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 256 256">
								<path fill="currentColor" d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6m-6 160H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h130Z"/>
							</svg>
							<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-[opacity,transform] duration-300 inline-block`}>Projects</span>
						</li>
						<li className="hover:bg-base-content/10 p-[0.4062rem] cursor-pointer transition-colors rounded-btn whitespace-nowrap mb-4">
							<svg className="inline-block mr-3" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
								<path fill="currentColor" d="M19.435 5.055h-.97c.01-.12.02-.24.02-.36a1.645 1.645 0 0 0-.45-1.18a1.462 1.462 0 0 0-1.05-.45h-9.96a1.484 1.484 0 0 0-1.06.45a1.6 1.6 0 0 0-.44 1.18c0 .12.01.24.02.36h-.98a1.5 1.5 0 0 0-1.5 1.5v2a4.5 4.5 0 0 0 4.27 4.49c1.07 2.3 2.53 3.79 4.17 4.04v2.85h-4a.5.5 0 1 0 0 1h9a.5.5 0 0 0 0-1h-4v-2.85c1.64-.25 3.1-1.74 4.17-4.04a4.493 4.493 0 0 0 4.26-4.49v-2a1.5 1.5 0 0 0-1.5-1.5m-15.37 3.5v-2a.5.5 0 0 1 .5-.5h1.04a22.9 22.9 0 0 0 1.28 5.93a3.5 3.5 0 0 1-2.82-3.43m7.94 7.57c-2.82 0-5.23-5.04-5.48-11.47a.573.573 0 0 1 .16-.44a.48.48 0 0 1 .34-.15h9.96a.442.442 0 0 1 .33.15a.62.62 0 0 1 .17.44c-.25 6.43-2.66 11.47-5.48 11.47m7.93-7.57a3.508 3.508 0 0 1-2.8 3.42a23.353 23.353 0 0 0 1.27-5.92h1.03a.5.5 0 0 1 .5.5Z"/>
							</svg>
							<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-[opacity,transform] duration-300 inline-block`}>Prestasi</span>
						</li>
						<li className="hover:bg-base-content/10 p-[0.4062rem] cursor-pointer transition-colors rounded-btn whitespace-nowrap mb-4">
							<svg className="inline-block mr-3" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 256 256">
								<path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h13.39a4 4 0 0 0 3.61-2.29a52 52 0 0 1 94 0a4 4 0 0 0 3.61 2.29H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4h-58.92a60.38 60.38 0 0 0-34.68-29.07a36 36 0 1 0-36.8 0A60.38 60.38 0 0 0 50.92 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-116-28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m92-92v96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h12V84H68v12a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4"/>
							</svg>
							<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-[opacity,transform] duration-300 inline-block`}>Guru</span>
						</li>
						<li className="hover:bg-base-content/10 p-[0.4062rem] cursor-pointer transition-colors rounded-btn whitespace-nowrap">
							<svg className="inline-block mr-3" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 256 256">
								<path fill="currentColor" d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2Z"/>
							</svg>
							<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-[opacity,transform] duration-300 inline-block`}>Portfolio</span>
						</li>
					</ul>

					<ul className="absolute bottom-32 w-full">
						<li className="hover:bg-base-content/10 p-2 cursor-pointer transition-colors rounded-btn whitespace-nowrap">
							<Link to='/login'>
								<svg className="inline-block mr-2" width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill="currentColor" d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z"/>
								</svg>
								<span className={`${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-[opacity,transform] duration-300 inline-block`}>Logout</span>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
};
export default Sidebar