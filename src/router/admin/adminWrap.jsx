import Admin from "./Admin"
import Super_admin from "./Super_admin"
import Sidebar from "../../components/sidebar"
import ErrorRouter from "../../errors/errorRouter"
import { useLoaderData } from "react-router-dom"
import useCookie from "../../hooks/useCookie"
import useFetch from "../../hooks/useFetch"
import useCache from "../../hooks/useCache"

export const loader = async () => {
   const cookie = useCookie('token')
   const cache = useCache()

   try {
      if (cookie.isExist()) {
         if (!cache.getCache('role')) {
            var { result } = await useFetch('https://api.pplgsmenza.id/admin/login', 'POST', null, null, cookie.isExist())
            cache.setCache('role', result.role)
            console.log('api req')
            return result.role
         }
      }
   } catch {
      return null
   }
   return cache.getCache('role') || null
}


const route = {
   admin: <Admin />,
   super_admin: <Super_admin />
}

export const AdminWrap = () => {
   const loaderData = useLoaderData()

   return loaderData ? (
         <>
            <Sidebar>
               {route[loaderData]}
            </Sidebar>
         </>
      ) : <ErrorRouter />
}