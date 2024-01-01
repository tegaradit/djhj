import { m, useMotionValueEvent, useScroll } from 'framer-motion';
import microchipImg from '../assets/svg/microchip.svg'
import abstractBg from '../assets/images/abstract.webp'
import { useState } from 'react';
// import { useEffect, useRef, useState } from 'react';

// const listColor = ['rgb(0, 255, 255)', 'rgb(185, 87, 255)', 'rgb(12, 250, 0)', 'rgb(67, 0, 250)', 'rgb(250, 0, 0)']

export default function Home() {

	const { scrollY } = useScroll()
	const [scrollYVal, setScrollYVal] = useState()

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest < window.innerHeight / 1.3)
		setScrollYVal(latest / (window.innerHeight - 74))
	})

	// const lightRef = useRef()
	// const handdleMove = ev => {
	// 	lightRef.current.style.transform = `translate(${ev.pageX}px, ${ev.pageY}px)`
	// }

	// useEffect(() => {
		// window.addEventListener('mousemove', handdleMove)
		// console.log('first')
	// }, [lightRef, ])

	// const [randomColor, setRandomColor] = useState('rgb(0, 255, 255)')
	// const controls = animationControls()
	// useEffect(() => {
	// 	controls.mount()
	// 	controls.start({
	// 		y: [0, 270, 270, 315, 315, 345, 345],
	// 		x: [0, 0, -315, -315, -110, -110, 190]
	// 	})
	// }, [])		

	return (
		<main style={{fontSize: 'clamp(14px, 2vw, 18px)'}} >
			<section className="h-[calc(100vh_-_4.5rem)] relative w-full flex justify-center items-center ">
				<div className="overflow-hidden w-full px-8">
					<div className="max-w-[45rem] text-center mx-auto">
						<m.h1
							className="text-[5em] text-base-content bg-contain bg-clip-text text-transparent" 
							style={{
								backgroundImage: `url(${abstractBg})`,
								// backgroundImage: `linear-gradient(5deg, rgba(255, 255, 255, 0.3) 35%, cyan, white 65%)`,
								scale: 1 + scrollYVal || 1,
								opacity: 1 - scrollYVal || 1
							}}
						>
							welcome to
						</m.h1>
						
						<m.h1 
							style={{
								opacity: 1 - (scrollYVal * 1.5) || 1 
							}}
							className='sm:mb-[1em] mb-[0.5em] pt-[0.5em] text-[4em]'
						>
							PPLG
						</m.h1>

						<div className='pointer-events-none absolute flex justify-center items-center pr-6 -top-6 left-0 -z-[1] overflow-hidden w-full h-screen'>
							<div className='relative'>
								<div style={{maskImage: `url(${microchipImg})`, maskRepeat: 'no-repeat'}} className="absolute top-0 left-0 w-full h-full">
									{/* LIGHT-1 */}
									<m.div
										animate={{
											y: [0, 270, 270, 315, 315, 345, 345],
											x: [0, 0, -315, -315, -110, -110, 190]
										}}
										transition={{
											duration: 3,
											ease: "easeInOut",
											times: [0, 0.2, 0.4, 0.45, 0.7, 0.75, 1],
											repeat: Infinity,
										}}

										style={{
											background: 'radial-gradient(rgb(0, 255, 255), transparent 50%)',
											top: 0,
											right: 170
										}}
										
										className="absolute w-10 h-10 blur-sm rounded-full pointer-events-none"
									/>

									{/* LIGHT-2 */}
									<m.div 
										animate={{
											y: [0, 315, 315, 340, 340],
											x: [0, 0, -135, -135, -455]
										}}
										transition={{
											duration: 2,
											ease: "easeInOut",
											times: [0, 0.3, 0.6, 0.7, 1],
											repeat: Infinity,
										}}
										style={{
											background: 'radial-gradient(rgb(185, 87, 255), transparent 50%)',
											top: 0,
											left: 440,
										}}
										className="absolute w-10 h-10 blur-sm rounded-full pointer-events-none"
									/>

									{/* LIGHT-3 */}
									<m.div 
										animate={{
											y: [0, 0, 95, 95, 240, 240, 600],
											x: [0, 530, 530, 325, 325, 643, 643]
										}}
										transition={{
											duration: 4,
											ease: "easeInOut",
											times: [0, 0.2, 0.3, 0.45, 0.6, 0.8, 1],
											repeat: Infinity,
										}}
										style={{
											background: 'radial-gradient(rgb(12, 250, 0), transparent 50%)',
											top: 220,
											left: -20
										}}
										className="absolute w-10 h-10 blur-sm rounded-full pointer-events-none"
									/>

									{/* LIGHT-4 */}
									<m.div 
										animate={{
											y: [0, 0, 118, 118, 220, 220, 600].reverse(),
											x: [0, 323, 323, 400, 400, 595, 595].reverse()
										}}
										transition={{
											duration: 3,
											ease: "easeInOut",
											times: [0, 0.2, 0.3, 0.45, 0.6, 0.8, 1],
											repeat: Infinity,
										}}
										style={{
											background: 'radial-gradient(rgb(67, 0, 250), transparent 50%)',
											top: 340,
											left: -20
										}}
										className="absolute w-10 h-10 blur-sm rounded-full pointer-events-none"
									/>

									{/* LIGHT-5 */}
									<m.div 
										animate={{
											y: [0, 0, 35, 35, 73, 73, 13, 13, 190, 190],
											x: [0, 275, 275, 320, 320, 800, 800, 845, 845, 1100]
										}}
										transition={{
											duration: 4,
											ease: "easeInOut",
											times: [0, 0.15, 0.2, 0.25, 0.3, 0.5, 0.6, 0.7, 0.8, 1],
											repeat: Infinity,
										}}
										style={{
											background: 'radial-gradient(rgb(250, 0, 0), transparent 50%)',
											top: 385,
											left: -20
										}}
										className="absolute w-10 h-10 blur-sm rounded-full pointer-events-none"
									/>
								</div>

								<div className="absolute top-0 left-0 w-full pointer-events-none h-full bg-gradient-to-t from-transparent from-75% to-base-100" />
								<div className="absolute top-0 left-0 w-full pointer-events-none h-full bg-gradient-to-l from-transparent from-75% to-base-100" />
								<div className="absolute top-0 left-0 w-full pointer-events-none h-full bg-gradient-to-r from-transparent from-75% to-base-100" />
								<div className="absolute top-0 left-0 w-full pointer-events-none h-full bg-gradient-to-b from-transparent from-75% to-base-100" />

								<svg width="1100" height="807.37" viewBox="0 0 936 687" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path className='stroke-base-content/10' d="M0 205H449C451.209 205 453 206.791 453 209V282" strokeWidth="5"/>
									
									<path className='stroke-base-content/10' d="M458 495H346C343.791 495 342 493.209 342 491V411 495L504 495C506.209 495 508 496.791 508 499L508 687" strokeWidth="5"/>
									
									<path className='stroke-base-content/10' d="M685 358H714C716.209 358 718 359.791 718 362V450 M718 450L718 506C718 508.209 719.791 510 722 510L936 510" strokeWidth="5"/>
									
									<path className='stroke-base-content/10' d="M273 377H241C238.791 377 237 375.209 237 373V359 M237 359L237 351C237 348.791 235.209 347 233 347L4.26196e-06 347" strokeWidth="5"/>
									
									<path className='stroke-base-content/10' d="M731 249L770 249C772.209 249 774 247.209 774 245L774 2.32867e-06 M508 282L508 253C508 250.791 509.791 249 512 249L731 249" strokeWidth="5"/>
									
									<rect className='stroke-base-content/10' x="275.5" y="284.5" width="407" height="124" rx="14.5" strokeWidth="5"/>
									<line className='stroke-base-content/10' x1="392.5" y1="-1.09278e-07" x2="392.5" y2="282" strokeWidth="5"/>
									<line className='stroke-base-content/10' x1="547.5" y1="411" x2="547.5" y2="687" strokeWidth="5"/>
									<line className='stroke-base-content/10' x1="936" y1="312" x2="685" y2="312" strokeWidth="6"/>
									<line className='stroke-base-content/10' x1="273" y1="307" x2="2.62268e-07" y2="307" strokeWidth="6"/>
									{/* <path className='fill-base-content/10' d="M365.455 381V311.182H389.045C394.523 311.182 399 312.17 402.477 314.148C405.977 316.102 408.568 318.75 410.25 322.091C411.932 325.432 412.773 329.159 412.773 333.273C412.773 337.386 411.932 341.125 410.25 344.489C408.591 347.852 406.023 350.534 402.545 352.534C399.068 354.511 394.614 355.5 389.182 355.5H372.273V348H388.909C392.659 348 395.67 347.352 397.943 346.057C400.216 344.761 401.864 343.011 402.886 340.807C403.932 338.58 404.455 336.068 404.455 333.273C404.455 330.477 403.932 327.977 402.886 325.773C401.864 323.568 400.205 321.841 397.909 320.591C395.614 319.318 392.568 318.682 388.773 318.682H373.909V381H365.455ZM426.392 381V311.182H449.983C455.46 311.182 459.938 312.17 463.415 314.148C466.915 316.102 469.506 318.75 471.188 322.091C472.869 325.432 473.71 329.159 473.71 333.273C473.71 337.386 472.869 341.125 471.188 344.489C469.528 347.852 466.96 350.534 463.483 352.534C460.006 354.511 455.551 355.5 450.119 355.5H433.21V348H449.847C453.597 348 456.608 347.352 458.881 346.057C461.153 344.761 462.801 343.011 463.824 340.807C464.869 338.58 465.392 336.068 465.392 333.273C465.392 330.477 464.869 327.977 463.824 325.773C462.801 323.568 461.142 321.841 458.847 320.591C456.551 319.318 453.506 318.682 449.71 318.682H434.847V381H426.392ZM487.33 381V311.182H495.784V373.5H528.239V381H487.33ZM586.338 333C585.588 330.705 584.599 328.648 583.372 326.83C582.168 324.989 580.724 323.42 579.043 322.125C577.384 320.83 575.497 319.841 573.384 319.159C571.27 318.477 568.952 318.136 566.429 318.136C562.293 318.136 558.531 319.205 555.145 321.341C551.759 323.477 549.065 326.625 547.065 330.784C545.065 334.943 544.065 340.045 544.065 346.091C544.065 352.136 545.077 357.239 547.099 361.398C549.122 365.557 551.861 368.705 555.315 370.841C558.77 372.977 562.656 374.045 566.974 374.045C570.974 374.045 574.497 373.193 577.543 371.489C580.611 369.761 582.997 367.33 584.702 364.193C586.429 361.034 587.293 357.318 587.293 353.045L589.884 353.591H568.884V346.091H595.474V353.591C595.474 359.341 594.247 364.341 591.793 368.591C589.361 372.841 585.997 376.136 581.702 378.477C577.429 380.795 572.52 381.955 566.974 381.955C560.793 381.955 555.361 380.5 550.679 377.591C546.02 374.682 542.384 370.545 539.77 365.182C537.179 359.818 535.884 353.455 535.884 346.091C535.884 340.568 536.622 335.602 538.099 331.193C539.599 326.761 541.713 322.989 544.44 319.875C547.168 316.761 550.395 314.375 554.122 312.716C557.849 311.057 561.952 310.227 566.429 310.227C570.111 310.227 573.543 310.784 576.724 311.898C579.929 312.989 582.781 314.545 585.281 316.568C587.804 318.568 589.906 320.966 591.588 323.761C593.27 326.534 594.429 329.614 595.065 333H586.338Z"/> */}
								</svg>
							</div>
						</div>
						
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

				<div
					style={{
						background: 'radial-gradient(rgba(0, 100, 255, 0.2), transparent 70%)'
					}}
					className="absolute left-0 bottom-1/2 w-[90vmin] h-[90vmin] blur-md rounded-full pointer-events-none" 
				/>
				<div
					style={{
						background: 'radial-gradient(rgba(157, 0, 230, 0.3), transparent 70%)'
					}}  
					className="absolute right-0 w-[90vmin] h-[90vmin] blur-md rounded-full pointer-events-none"
				/>
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
