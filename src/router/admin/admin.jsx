import { Link, useLocation } from "react-router-dom"
import __basicAdmin from "./__basic-admin"
import __superAdmin from "./__super-admin"
import { useEffect } from "react"
import { useFetch } from "../../hooks/hooks"


const Admin = () => {
   const location = useLocation()

   useEffect(() => {
      if (location) {
            useFetch('https://api.pplgsmenza.id/admin/login', 'POST', 'application/json', {
               username: location.state.username, 
               password: location.state.password
            }, location.state.token)
            .then(res => {
               console.log(res)
            })
      }
   }, [location])


   return (
      <>
         <div>Admin</div>
         <Link to='/login'>back to login</Link>
      </>
   )
}
export default Admin