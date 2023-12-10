import "./index.css";
import React    from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Root, 	  { loaderDataGuru } from "./router/root";
import Home 	  from "./router/home";
import ErrorPage from "./errors/error-page";


/**
 * @param {string} path
 * @param {Object} modules
 */
const lazyImport = async (path, modules) => {
	const result = {}

	await import(path).then(module => 
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
		loader: loaderDataGuru,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "login",
				lazy: () => lazyImport('./router/login', {
					Component: 'Login',
					action: 'actionLogin'
				})
			},
			{
				path: "auth",
				lazy: () => lazyImport('./router/admin/admin', {
					Component: 'Admin'
				})
			},
			{
				path: "projects",
				lazy: () => lazyImport('./router/projects', {
					Component: 'Projects', 
					loader: 'loaderProjects'
				})
			},
			{
				path: "teachers",
				lazy: () => lazyImport('./router/teachers', {
					Component: 'Teachers'
				})
			},
			{
				path: "about",
				lazy: () => lazyImport('./router/about', {
					Component: 'About'
				})
			}
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
