import "./index.css";
import React    from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Root from "./router/root";
import Home from "./router/home";
import ErrorRouter from "./errors/errorRouter";


/**
 * @param {string} path
 * @param {Object} modules
 */
const lazyImport = async (path, modules) => {
	const result = {}

	
	await import(`/src/router/${path}.jsx` /* @vite-ignore */).then(module => 
		Object.entries(modules).forEach(([key, val]) => 
			result[key] = module[val]
		)
	)

	return result
}


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "login",
				lazy: () => lazyImport('login', {
					Component: 'Login',
					action: 'actionLogin'
				})
			},
			{
				path: "admin",
				lazy: () => lazyImport('admin/admin', {
					Component: 'Admin'
				})
			},
			{
				path: "projects",
				lazy: () => lazyImport('projects', {
					Component: 'Projects',
					loader: 'loaderProjects'
				})
			},
			{
				path: "teachers",
				lazy: () => lazyImport('teachers', {
					Component: 'Teachers',
					loader: 'loaderTeacher'
				})
			},
			{
				path: "about",
				lazy: () => lazyImport('about', {
					Component: 'About',
					loader: 'loaderDev'
				})
			}
		],
	},
	{
		path: '*',
		element: <ErrorRouter />
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
