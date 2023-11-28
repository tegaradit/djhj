import { Link, useOutletContext } from "react-router-dom";
import { Card } from "../components/components";






export default function Home() {
	// data harus di simpan ke useState agar data tetap dapat di gunakan pada saat transisi
	const dataGuru = useOutletContext()

	return (
		<div className="flex justify-center items-center flex-col">
			<h1>Home Page</h1>
			<Link to={'/login'}>Login</Link>
			<div className="flex flex-wrap justify-evenly items-start px-4 gap-4 h-screen">
				{dataGuru.map((data, idx) => {
					return <Card data={data} key={idx} />
				})}
			</div>
		</div>
	)
}
