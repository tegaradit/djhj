import abstractBg from '../assets/images/abstract.webp'


export default function Home() {
	return (
		<main className='' style={{fontSize: 'clamp(14px, 2vw, 18px)'}}>
			<section className="h-[calc(100vh_-_4.5rem)] relative w-full flex justify-center items-center px-8">
				<div className="max-w-[45rem] text-center">
					<div className="max-w-96">
						<h1 className="text-[5em] mb-2 md:mb-8 text-transparent bg-clip-text bg-left hover:bg-right bg-contain transition-[background-position] duration-[1.5s]" style={{backgroundImage: `url(${abstractBg})`}}>welcome</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At
							vel temporibus pariatur ad inventore unde ea optio obcaecati
							illum ipsum, aut molestiae autem nihil eaque aliquid
							voluptatem similique. Culpa, unde!
						</p>
					</div>
				</div>

				<div className="absolute left-0 -top-1/2 w-[90vmin] h-[90vmin] blur-md rounded-full pointer-events-none" style={{background: 'radial-gradient(rgba(0, 100, 255, 0.2), transparent 70%)'}}>

				</div>
				<div className="absolute right-0 w-[90vmin] h-[90vmin] blur-md rounded-full pointer-events-none" style={{background: 'radial-gradient(rgba(157, 0, 230, 0.3), transparent 70%)'}}>

				</div>
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
