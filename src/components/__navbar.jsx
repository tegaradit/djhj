import { Link } from "react-router-dom"

export default () => {
   return (
      <nav className="sticky top-0 navbar bg-base-300 z-[999999999]">
         <div className="flex-none avatar placeholder mr-4">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
               <span className="text-base">PG</span>
            </div>
         </div>

         <div className="flex-1">
            PPLGSMENZA
         </div>
         
         <ul className="menu menu-horizontal bg-base-200 rounded-box">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/teachers'>Teachers</Link></li>
            <li><a>About</a></li>
         </ul>
      </nav>
   )
}
