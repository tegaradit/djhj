import "./index.css";
import React    from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Root from "./router/root";
import Home from "./router/home";
import ErrorRouter from "./errors/errorRouter";
import { Admin } from "./router/admin/admin";


/**
 * @param {string} path
 * @param {Object} modules
 */
const lazyImport = async (path, modules) => {
	let result = {}

	
	// await import(`./router/${path}.jsx`).then(module => 
	// 	Object.entries(modules).forEach(([key, val]) => 
	// 		result[key] = module[val]
	// 	)
	// )

	
	switch (path) {
		case "login":
			result = await import("./router/login.jsx").then((module) => {
				return { Component: module.Login, action: module.actionLogin };
			});

			break;
		case "projects":
			result = await import("./router/projects.jsx").then((module) => {
				return {
					Component: module.Projects,
					loader: module.loaderProjects,
				};
			});

			break;
		case "teachers":
			result = await import("./router/teachers.jsx").then((module) => {
				return { Component: module.Teachers, loader: module.loaderTeacher };
			});

			break;
		case "about":
			result = await import("./router/about.jsx").then((module) => {
				return { Component: module.About, loader: module.loaderDev };
			});

			break;

		default:
			break;
	}
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
				element: <Admin />
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

// const AnimateRouters = () => {
// 	const location = useLocation();
// 	const locationArr = location.pathname?.split('/') ?? [];
	
// 	return (
// 		<AnimatePresence mode="popLayout">
// 			<Routes location={location} key={locationArr[1]}>
// 				<Route index element={<Home />} />
// 				<Route path="login" lazy={() => lazyImport('login', {
// 					Component: 'Login',
// 					action: 'actionLogin'
// 				})} />
// 				<Route path="admin" lazy={() => lazyImport('admin/admin', {
// 					Component: 'Admin'
// 				})} />
// 				<Route path="projects" lazy={() => lazyImport('projects', {
// 					Component: 'Projects',
// 					loader: 'loaderProjects'
// 				})} />
// 				<Route path="teachers" lazy={() => lazyImport('teachers', {
// 					Component: 'Teachers',
// 					loader: 'loaderTeacher'
// 				})} />
// 				<Route path="about" lazy={() => lazyImport('about', {
// 					Component: 'About',
// 					loader: 'loaderDev'
// 				})} />
// 			</Routes>
// 		</AnimatePresence>
// 	)
// }

// const router = createBrowserRouter(createRoutesFromElements(
// 	<>
// 		<Route path="*" element={<Root />}>
// 			<Route index element={<AnimateRouters />} />
// 		</Route>
// 		{/* <Route path="*" element={<ErrorRouter />} /> */}
// 	</>
// ))

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
