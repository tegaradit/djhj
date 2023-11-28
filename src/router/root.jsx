import { Outlet, useLoaderData } from "react-router-dom";
import ErrorBoundary from "../errors/errorBoundary";
import { useFetch } from "../hooks/hooks";

export async function loaderDataGuru() {
	return await useFetch("https://api.pplgsmenza.id/guru", "get")
	.then(res => res.json())
	.then(data => {
		return data
	})

	// if (!sessionStorage.getItem('dtgr')) {
	// 			// sessionStorage.setItem('dtgr', JSON.stringify(data))
	// } else {
	// 	return JSON.parse(sessionStorage.getItem('dtgr'))
	// }
}

export default function Root() {
	const dataGuru = useLoaderData()

	return (
		<>
			<ErrorBoundary fallback={<p>Error</p>}>
            <Outlet context={dataGuru} />
			</ErrorBoundary>
		</>
	)
}
