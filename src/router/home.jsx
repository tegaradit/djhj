import { m, useMotionValueEvent, useScroll } from 'framer-motion';
import abstractBg from '../assets/images/abstract.webp'
import { useState } from 'react';


export default function Home() {

	const { scrollY } = useScroll()
	const [scrollYVal, setScrollYVal] = useState()

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest < window.innerHeight / 1.3)
		setScrollYVal(latest / (window.innerHeight - 74))
	})

	return (
		<main style={{fontSize: 'clamp(14px, 2vw, 18px)'}} >
			<section className="h-[calc(100vh_-_4.5rem)] relative w-full flex justify-center items-center ">
				<div className="overflow-hidden w-full px-8">
					<div className="max-w-[45rem] text-center mx-auto">
						<m.h1
							className="text-[5em] mb-2 md:mb-8 text-transparent bg-clip-text bg-contain transition-[background-position] duration-[1.5s]" 
							style={{
								backgroundImage: `url(${abstractBg})`,
								scale: 1 + scrollYVal || 1,
								opacity: 1 - scrollYVal || 1
							}}
						>
							welcome
						</m.h1>
						<m.p
							style={{
								scale: 1 - scrollYVal || 1,
								opacity: 1 - scrollYVal || 1
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At
							vel temporibus pariatur ad inventore unde ea optio obcaecati
							illum ipsum, aut molestiae autem nihil eaque aliquid
							voluptatem similique. Culpa, unde!
						</m.p>
					</div>
				</div>

				<m.div
					style={{
						background: 'radial-gradient(rgba(0, 100, 255, 0.2), transparent 70%)'
					}}
					className="absolute left-0 bottom-1/2 w-[90vmin] h-[90vmin] blur-md rounded-full pointer-events-none" 
				></m.div>
				<m.div
					style={{
						background: 'radial-gradient(rgba(157, 0, 230, 0.3), transparent 70%)'
					}}  
					className="absolute right-0 w-[90vmin] h-[90vmin] blur-md rounded-full pointer-events-none"
				></m.div>
			</section>


			<section className="h-[200vh] w-full">
				<div className="px-24 py-8">
					<h1 className="text-[3em] text-center mb-10 row-span-1">PPLG!</h1>

					<div className="flex h-full gap-8 row-span-1">
						<div className="grow w-5 h-[27rem] bg-base-300 rounded-2xl"></div>
						<p className="grow w-56">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Tempora facilis nisi voluptatibus quo suscipit illo ad nobis
							laboriosam quia dolore? Repudiandae totam ea vero, debitis
							molestias voluptatem ratione. Aspernatur, explicabo.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
