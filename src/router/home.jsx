import { useLoaderData } from "react-router-dom";
import { Card } from "../components/components";
import { useFetch } from "../hooks/hooks";
import { motion } from "framer-motion";

export async function loaderDataGuru() {
	return await useFetch("https://api.pplgsmenza.id/guru", "get");
}

export default function Home() {
	const dataGuru = useLoaderData();
   console.log(dataGuru)

	return (
		<div className="flex justify-center items-center flex-col">
			<h1>Home Page</h1>
			<Card datas={dataGuru[0]} image={dataGuru[0].foto_profil} />
			{/* <motion.div
            style={{
               width: 150,
               height: 150,
               background: 'red'
            }}
				
            animate={{
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 270, 270, 0],
					borderRadius: ["20%", "20%", "50%", "50%", "20%"],
				}}

            transition={{
               duration: 2,
               repeat: Infinity
            }}
			/> */}
		</div>
	);
}
