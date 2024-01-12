import __basicAdmin from "./__basic-admin"
import __superAdmin from "./__super-admin"
import Sidebar from "../../components/sidebar"
import { useLocation } from "react-router-dom"
import ErrorRouter from "../../errors/errorRouter"

export const Admin = () => {
   const location = useLocation()

   // return location.state ?
   //    (
   //       <>
   //          <Sidebar />
   //          <main className="ml-16 mt-16 p-12">
   //             {(location.state.role === 'admin') ?
   //                <__basicAdmin />
   //                :
   //                <__superAdmin />
   //             }
   //          </main>
   //       </>
   //    )
   //    :
   //    <ErrorRouter />
      
   return <>
         <Sidebar>
            <__basicAdmin />
         </Sidebar>
      </>
   
}