import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Root, { loaderDataGuru } from './router/root'
import Home from './router/home'
import Login, { actionLogin } from './router/login'
import ErrorPage from './errors/error-page'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		loader: loaderDataGuru,
		children: [
			{
				index: true,
				element: (
						<AnimatePresence mode='popLayout'>
							<motion.div 
								key='home'

								initial={{
									opacity: 0,
									y: '20%'
								}} 
								animate={{
									y: '0',
									opacity: 1
								}} 
								exit={{
									y: '20%',
									opacity: 0
								}} 
								transition={{
									duration: 0.7,
									ease: 'easeInOut'
								}}
							>
								<Home />
							</motion.div>
						</AnimatePresence>
				)
			},
			{
				path: "login",
				element: (
						<AnimatePresence mode='popLayout'>
							<motion.div 
								key='login' 

								initial={{
									opacity: 0,
									y: '-100%'
								}} 
								animate={{
									y: '0',
									opacity: 1
								}} 
								exit={{
									y: '-100%',
									opacity: 0
								}} 
								transition={{
									duration: 0.7,
									ease: 'easeInOut'
								}}
							>
								<Login />
							</motion.div>
						</AnimatePresence>
				),
				action: actionLogin
			},
		],
	},
	{
		path: '*',
		element: <ErrorPage />
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
