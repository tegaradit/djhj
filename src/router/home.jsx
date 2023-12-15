import Navbar from "../components/navbar";
import imgTitle from "../assets/images/home.png";

export default function Home() {
	return (
		<main style={{fontSize: 'clamp(14px, 2vw, 18px)'}}>
			<section className="h-[100svh] w-full flex justify-center items-center px-8">
				<div className="max-w-[65rem] justify-center text-center md:text-left md:justify-between md:flex-row flex flex-col items-center">
					<div className="max-w-96">
						<h1 className="text-[3em] mb-2 md:mb-8">welcome</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At
							vel temporibus pariatur ad inventore unde ea optio obcaecati
							illum ipsum, aut molestiae autem nihil eaque aliquid
							voluptatem similique. Culpa, unde!
						</p>
					</div>
					<img
						className="object-cover w-[35rem] order-first mb-4 md:mb-0 md:order-last"
						draggable="false"
						src={imgTitle}
						alt=""
					/>
				</div>
			</section>


			<section className="h-[200vh] w-full">
				<Navbar />

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
