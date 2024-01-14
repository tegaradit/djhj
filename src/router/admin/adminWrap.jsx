import Admin from "./Admin"
import Super_admin from "./Super_admin"
import Sidebar from "../../components/sidebar"
import ErrorRouter from "../../errors/errorRouter"
import { useLoaderData, useLocation } from "react-router-dom"
import useCookie from "../../hooks/useCookie"
import useFetch from "../../hooks/useFetch"

export const loader = async () => {
   const cookie = useCookie('token')

   if (cookie.isExist()) {
      var { result } = await useFetch('https://api.pplgsmenza.id/admin/login', 'POST', null, null, cookie.isExist())
      return result.role
   }
   
   return null
}

const route = {
   admin: <Admin />,
   super_admin: <Super_admin />
}

export const AdminWrap = () => {
   const location = useLocation()
   const loaderData = useLoaderData()

   return location.state instanceof Object || loaderData ?
      route[location.state.navigateTo || loaderData] ? (
         <>
            <Sidebar>
               {route[location.state.navigateTo || loaderData]}
            </Sidebar>
         </>
      ) : <ErrorRouter />
      : <ErrorRouter />
}