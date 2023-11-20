import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from './router/root'
import Home, { loaderDataGuru } from './router/home'
import Login, { action } from './router/login'
import ErrorPage from './errors/error-page'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: loaderDataGuru,
			},
			{
				path: "login",
				element: <Login />,
				action: action
			},
		],
	},
	{
		path: '*',
		element: <ErrorPage />
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
