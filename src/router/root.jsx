import { Outlet, useLoaderData, useLocation, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LazyMotion, m, domAnimation, useMotionValue } from "framer-motion"

import ErrorBoundary from "../errors/error-boundary";
import Navbar from "../components/navbar";
import useFetch from "../hooks/useFetch";


export const loaderDataGuru = async () => {
	return await useFetch("https://api.pplgsmenza.id/guru", "get")
}

const Root = () => {
	const dataGuru = useLoaderData()
	const pathname = useLocation().pathname
	
	const [theme, setTheme] = useState('dark')
	useEffect(() => {
		document.querySelector('html').setAttribute('data-theme', theme);
	}, [theme])


	const scaleX = useMotionValue(0, {
      stiffness: 900, 
      damping: 90
   })
	const { state } = useNavigation()
	useEffect(() => {
		console.log(state)
		if (state == 'loading') {
			let i = 0
			const speed = Math.random() * (0.065 - 0.01) + 0.01
			const end = Math.random() * (0.9 - 0.75) + 0.75

			var loadingAnimation = setInterval(() => {
				if (i >= end) clearInterval(loadingAnimation)
				scaleX.set(i += speed)
			}, 10)
		} else {
			clearInterval(loadingAnimation)
			scaleX.set(1)
		}
	}, [state])


	return (
		<>
			<ErrorBoundary fallback={<p>Error</p>}>
				<LazyMotion features={domAnimation}>
					<m.div
						style={{
							scaleX
						}}

						className={`${state == 'idle' ? 'opacity-0 transition-opacity duration-500' : 'opacity-100'} origin-left w-full left-0 fixed top-0 h-[0.1rem] z-[999999] bg-gradient-to-r from-cyan-700 to-cyan-400`}
					/>
				</LazyMotion>
				{pathname != '/' & pathname != '/login' & !pathname.includes('/auth') ? <Navbar theme={[theme, setTheme]} /> : ''}
            <Outlet context={{dataGuru, theme: [theme, setTheme]}} />
			</ErrorBoundary>
		</>
	)
}
export default Root