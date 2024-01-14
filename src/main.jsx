import "./index.css";
import React    from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import loaderApi from "./utils/loaderApi.js";

import Root from "./router/root.jsx";
import Home from "./router/home.jsx";
import ErrorRouter from "./errors/errorRouter.jsx";
import { AdminWrap } from "./router/admin/adminWrap.jsx";


const lazyImport = async moduleName => {
	let result = {}

	
	// await import(`./router/${moduleName}.jsx`).then(module => 
	// 	Object.entries(modules).forEach(([key, val]) => 
	// 		result[key] = module[val]
	// 	)
	// )

	
	switch (moduleName) {
		case "login":
			result = await import("./router/login.jsx").then(module => {
				return { 
					Component: module.Login, 
					action: module.actionLogin,
					loader: module.loaderLogin
				};
			});

			break;
		case "admin":
			result = await import('./router/admin/adminWrap.jsx').then(module => {
				return {
					Component: module.AdminWrap,
					loader: module.loader
				}
			})

			break;
		case "projects":
			result = await import("./router/projects.jsx").then(module => {
				return {
					Component: module.Projects,
					loader: () => loaderApi('https://api.pplgsmenza.id/projek', 'dataProjects')
				};
			});

			break;
		case "teachers":
			result = await import("./router/teachers.jsx").then(module => {
				return { 
					Component: module.Teachers, 
					loader: () => loaderApi('https://api.pplgsmenza.id/guru', 'dataGuru') 
				};
			});

			break;
		case "about":
			result = await import("./router/about.jsx").then(module => {
				return { 
					Component: module.About, 
					loader: () => loaderApi('https://api.pplgsmenza.id/pengembang', 'dataDev') 
				};
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
				lazy: () => lazyImport('login')
			},
			{
				path: "admin",
				lazy: () => lazyImport('admin')
			},
			{
				path: "projects",
				lazy: () => lazyImport('projects')
			},
			{
				path: "teachers",
				lazy: () => lazyImport('teachers')
			},
			{
				path: "about",
				lazy: () => lazyImport('about')
			}
		],
	},
	{
		path: '*',
		element: <ErrorRouter />
	},
])

// const router = createBrowserRouter(createRoutesFromElements(
// 	<Route path="/" element={<Root />}>
// 		<Route index element={<Home />} />
// 		<Route path="/login" lazy={() => lazyImport('login')} />
// 		<Route path="/projects" lazy={() => lazyImport('projects')} />
// 		<Route path="/teachers" lazy={() => lazyImport('teachers')} />
// 		<Route path="/about" lazy={() => lazyImport('about')} />
// 		<Route path="/auth" element={<AdminWrap />} />
// 	</Route>
// ))

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
// 	<Route path="*" element={<Root />} />
// ))

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
