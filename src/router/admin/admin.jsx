import { Link, redirect, useLoaderData, useLocation } from "react-router-dom"
import __basicAdmin from "./__basic-admin"
import __superAdmin from "./__super-admin"
import { useEffect } from "react"
// import { useFetch } from "../../hooks/hooks"
// import plus from '../../assets/svg/plus.svg'
import Sidebar from "../../components/sidebar"
import useCookie from "../../hooks/useCookie"

export const adminLoader = () => {
   const cookie = useCookie('token')

   if (!cookie.isExist()) return redirect('/login')
   return 'success'
}

export const Admin = () => {
   const data = useLoaderData()
   const location = useLocation()
   // const navigate = useNavigate()

   let role = false
   let isLogin = false
   useEffect(() => {
      // if (location.state) {
      //    isLogin = true
      //    role = location.state.message.includes('super admin')
      // } else navigate('/login')
      console.log(data, location)
   }, [])

   return (
      <>
         <Sidebar />
         <main className="ml-16 mt-16 p-12">
            {isLogin ? role ? <__superAdmin /> : <__basicAdmin /> : ''}
            {/* <div className="mb-8 rounded-badge bg-base-300/50 w-24 cursor-pointer h-10 flex items-center gap-2">
               <div className="rounded-full bg-white/10 p-2 w-fit">
                  <img src={plus} alt="" />
               </div>
               <p>Add</p>
            </div>

            <div className="w-full bg-base-200 rounded-box min-h-screen p-4">
               <table className="w-full text-center">
                  <thead>
                     <tr>
                        <th>ID project</th>
                        <th>Project</th>
                        <th>Class</th>
                        <th>Creator</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>0001</td>
                        <td>Pembuatan Game Edukasi 2D P5</td>
                        <td>XI PPLG 1</td>
                        <td>Billie Eilish</td>
                        <td>March 21, 2023, 12:54</td>
                        <td>
                           <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn m-1">Action</div>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
                                 <li><button className="btn btn-success btn-sm h-0 text-sm h-min-0 p-0 mb-4 w-20">Edit</button></li>
                                 <li><button className="btn btn-error btn-sm h-0 text-sm h-min-0 p-0 w-20">Delete</button></li>
                              </ul>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td>0001</td>
                        <td>Pembuatan Game Edukasi 2D P5</td>
                        <td>XI PPLG 1</td>
                        <td>Billie Eilish</td>
                        <td>March 21, 2023, 12:54</td>
                        <td>
                           <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn m-1 z-0">Action</div>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
                                 <li><button className="btn btn-success btn-sm h-0 text-sm h-min-0 p-0 mb-4 w-20">Edit</button></li>
                                 <li><button className="btn btn-error btn-sm h-0 text-sm h-min-0 p-0 w-20">Delete</button></li>
                              </ul>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div> */}
         </main>
      </>
   )
}