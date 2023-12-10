import Navbar from "../components/navbar";


export default function Home() {

	return (
		<main>
			<section className="h-[100svh] w-full">
				<h1 className="text-6xl text-center leading-[100svh]">welcome</h1>
			</section>

			<Navbar />

			<section className="h-[80.5vh] w-full px-24 py-8">
				<h1 className="text-6xl text-center mb-10">Welcome!</h1>

				<div className="flex h-full gap-8">
					<div className="grow w-5 h-[27rem] bg-base-300 rounded-2xl"></div>
					<p className="grow w-56">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora facilis nisi voluptatibus quo suscipit illo ad nobis laboriosam quia dolore? Repudiandae totam ea vero, debitis molestias voluptatem ratione. Aspernatur, explicabo.
					</p>
				</div>
			</section>
		</main>
	)
}
