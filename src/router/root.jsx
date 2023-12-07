import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import ErrorBoundary from "../errors/error-boundary";
import { useFetch } from "../hooks/hooks";
import { Navbar } from "../components/components";

export const loaderDataGuru = async () => {
	return await useFetch("https://api.pplgsmenza.id/guru", "get")
}

const Root = () => {
	const dataGuru = useLoaderData()
	const pathName = useLocation().pathname

	return (
		<>
			<ErrorBoundary fallback={<p>Error</p>}>
				{pathName != '/' & pathName != '/login' ? <Navbar /> : ''}
            <Outlet context={dataGuru} />
			</ErrorBoundary>
		</>
	)
}
export default Root