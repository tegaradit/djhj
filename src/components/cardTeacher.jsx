import { m, useSpring } from "framer-motion";

const CardLooping = ({ item }) => {
	const springOptions = {
		stiffness: 500,
		damping: 90,
	};

	const x = useSpring(0, springOptions);
	const y = useSpring(0, springOptions);
	const handdleMouse = (ev) => {
		x.set(ev.nativeEvent.layerX - 192);
		y.set(ev.nativeEvent.layerY - 230);
	};

	return (
		<>
			<div className="min-w-96 pl-5 pt-5">
				<div
					title="klik untuk melihat detail"
					onMouseMove={handdleMouse}
					onClick={() =>
						document.getElementById(`detail-guru-${item.id}`).showModal()
					}
					className="group hover:-translate-y-1 hover:shadow-lg transition-[shadow_transform]  duration-300 cursor-pointer relative h-28 bg-base-300/50 rounded-xl"
				>
					<div className="pointer-events-none absolute z-10 -translate-x-1/4 -translate-y-1/4 border-[5px] border-base-100 w-20 h-20 bg-gray-700 rounded-full">
						<img
							src={item.foto_profil}
							className="w-full h-full rounded-full object-cover"
						/>
					</div>

					<div className="pointer-events-none overflow-hidden rounded-[inherit] relative h-full">
						<div className="ml-20 pt-4 pr-6 mb-auto z-10">
							<h1 className="font-bold">{item.nama}</h1>
							<p className="text-current/50 text-sm">{item.jabatan}</p>
						</div>
						<m.div
							style={{
								background: "radial-gradient(cyan, transparent 50%)",
								x,
								y,
							}}
							className="w-96 h-96 pointer-events-none group-hover:opacity-[15%] opacity-0 transition-opacity self-center duration-500 absolute blur-md rounded-full"
						/>
					</div>
				</div>
			</div>

			<dialog id={`detail-guru-${item.id}`} className="modal">
				<div className="modal-box h-[37rem] flex flex-col items-stretch">
					<form method="dialog">
						<button className="fixed btn btn-sm btn-circle btn-ghost right-2 top-2">
							✕
						</button>
					</form>

					<div className="flex flex-col items-center self-center p-6">
						<h1 className="font-bold text-lg mb-4">{item.nama}</h1>
						<div className="avatar mb-4">
							<div className="w-32 rounded-full">
								<img src={item.foto_profil} />
							</div>
						</div>
						<h2 className="text-current/50">8888-8888-8888</h2>
						<p className="font-bold text-center">{item.mapel}</p>
					</div>

					<div className="flex gap-4 mb-6">
						<ul>
							<li className="mb-4">
								<svg
									width="25"
									height="24"
									viewBox="0 0 25 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M18.2081 0C22.0802 0 25 3.344 25 7.77846V16.2314C25 18.5009 24.2419 20.5514 22.864 22.0062C21.6279 23.3095 20.0244 24 18.2267 24H6.76977C4.97558 24 3.37326 23.3108 2.13605 22.0062C0.75814 20.5514 0 18.5009 0 16.2314V7.77846C0 3.344 2.91977 0 6.79186 0H18.2081ZM18.2081 1.84615H6.79186C3.86744 1.84615 1.74419 4.34092 1.74419 7.77846V16.2314C1.74419 18.0074 2.32093 19.5938 3.36744 20.6978C4.26977 21.6517 5.44767 22.1538 6.77326 22.1538H18.2081C18.2105 22.1514 18.2198 22.1538 18.2267 22.1538C19.5535 22.1538 20.7302 21.6517 21.6326 20.6978C22.6802 19.5938 23.2558 18.0074 23.2558 16.2314V7.77846C23.2558 4.34092 21.1326 1.84615 18.2081 1.84615ZM20.0407 7.54314C20.3442 7.93822 20.2872 8.51914 19.914 8.8416L14.7465 13.2871C14.093 13.8361 13.3116 14.1105 12.5314 14.1105C11.7535 14.1105 10.9779 13.8385 10.3291 13.2945L5.11395 8.84406C4.73837 8.52406 4.68023 7.94191 4.9814 7.5456C5.28488 7.15052 5.83372 7.08775 6.20814 7.40652L11.4186 11.8521C12.0733 12.401 12.9953 12.401 13.6547 11.8471L18.8128 7.40899C19.1872 7.08529 19.736 7.14683 20.0407 7.54314Z"
										fill="white"
									/>
								</svg>
							</li>
							<li className="mb-4">
								<svg
									width="27"
									height="29"
									viewBox="0 0 27 29"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.9246 1C21.6956 1.58405 25.465 5.73353 26 10.9928"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M16.9246 6.03479C19.2076 6.52363 20.9917 8.49179 21.4365 11.0085"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12.6428 15.1713C17.7851 20.8384 18.9516 14.2822 22.2258 17.8889C25.3823 21.3676 27.1979 22.0646 23.1972 26.472C22.6963 26.9158 19.5135 32.255 8.32799 19.9279C-2.85887 7.59937 1.98175 4.08716 2.38445 3.53509C6.3934 -0.884535 7.01612 1.12702 10.1726 4.60568C13.4454 8.21397 7.50046 9.50417 12.6428 15.1713Z"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</li>
							<li className="mb-4">
								<svg
									width="26"
									height="26"
									viewBox="0 0 26 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.40911 23.5257V19.8456C9.40909 18.9096 10.2124 18.149 11.2076 18.1427H14.8532C15.8531 18.1427 16.6638 18.9051 16.6638 19.8456V23.5371C16.6636 24.3318 17.338 24.9814 18.1828 25H20.6132C23.0359 25 25 23.1528 25 20.8742V10.4054C24.9871 9.50899 24.5395 8.66722 23.7848 8.11964L15.4729 1.82236C14.0168 0.72588 11.9468 0.72588 10.4906 1.82236L2.21519 8.13107C1.45759 8.67643 1.00933 9.5196 1 10.4168V20.8742C1 23.1528 2.96405 25 5.38684 25H7.81722C8.68297 25 9.38481 24.3399 9.38481 23.5257"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</li>
							<li className="mb-4">
								<svg
									width="27"
									height="29"
									viewBox="0 0 27 29"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.12866 10.9958H25.8841"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M19.6694 16.2681H19.6827"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M13.5066 16.2681H13.5199"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M7.33057 16.2681H7.34384"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M19.6694 21.5148H19.6827"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M13.5066 21.5148H13.5199"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M7.33057 21.5148H7.34384"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M19.1162 1V5.44253"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M7.89624 1V5.44253"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M19.3864 3.13208H7.62633C3.5476 3.13208 1 5.34058 1 9.40014V21.6171C1 25.7405 3.5476 28.0001 7.62633 28.0001H19.3736C23.4652 28.0001 26 25.7788 26 21.7192V9.40014C26.0128 5.34058 23.478 3.13208 19.3864 3.13208Z"
										stroke="white"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</li>
						</ul>
						<ul>
							<li className="mb-5">example@gmail.com</li>
							<li className="mb-5">+62-8888888888</li>
							<li className="mb-5">{item.alamat}p</li>
							<li className="mb-5">kebumen, dd mm yyyy</li>
						</ul>
					</div>

					<div className="w-11/12 p-3 bg-base-300 rounded-xl self-center ">
						<p>
							<span className="text-3xl font-black">"</span>
							{item.motto_hidup}
						</p>
					</div>
				</div>

				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
};

const CardTeacher = ({ data, className = "" }) => {
	return (
		<div className={className}>
			{data.map(item => <CardLooping item={item} key={item.id} />)}
		</div>
	);
}

export default CardTeacher;
