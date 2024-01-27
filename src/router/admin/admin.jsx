import { Outlet, useOutletContext } from "react-router-dom"

export default () => {
	const [theme, setTheme] = useOutletContext().theme

	return (
		<Outlet context={{theme: [theme, setTheme]}} />
	)
}