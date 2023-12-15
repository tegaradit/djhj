import { Link, useOutletContext } from "react-router-dom"
import exampleProfile from '../assets/images/example-profile.jpg'
import { useAnimate, stagger } from 'framer-motion'
import { useState } from "react"

const Navbar = ({ theme }) => {
   const [themeWeb, setTheme] = theme || useOutletContext()['theme']   
   const handdleChange = () => {
      themeWeb == 'dark' ? setTheme('light') : setTheme('dark')
   }

   const [scope, animate] = useAnimate()
   const animateConfig = {
      duration: 0.5,
      ease: 'anticipate',
   }

   const [showMenu, setShowMenu] = useState(true)
   const handdleFocus = () => {
      setShowMenu(prev => !prev)

      animate(scope.current, 
         {
            y: [-70 * Number(showMenu), -70 * Number(!showMenu)],
            scale: [Number(!showMenu), Number(showMenu)]
         },
         { 
            ...animateConfig,
            delay: (0.6 * Number(!showMenu))
         }
      )
         
      animate(scope.current, 
         {
            borderRadius: 20 * Number(showMenu),
            x: (((window.innerWidth / 2) - 100) - 185) * Number(showMenu),
            height: 40 + 15 * Number(showMenu),
            width: 40 + 360 * Number(showMenu)
         },
         {
            ...animateConfig,
            delay: (0.2 * Number(showMenu)) + (0.4 * Number(!showMenu))
         }
      )

      animate('ul li', 
         {
            scale: [Number(!showMenu), Number(showMenu)]
         },
         {
            ...animateConfig,
            delay: stagger(0.1, {startDelay: 0.3 * Number(showMenu), from: 'center'})
         }
      )

   }

   return (
      <nav className="sticky top-0 navbar bg-base-300 z-[9999] px-6">
         <div className="flex-none avatar mr-4">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
               <img src={exampleProfile} alt="" />
            </div>
         </div>

         <div className="block sm:hidden flex-1">
            <div className="relative w-fit">
               <button onFocus={handdleFocus} onBlur={handdleFocus} tabIndex={0} className="btn btn-ghost btn-sm w-fit p-1 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
               </button>

               <div ref={scope} className="scale-0 border border-current select-none origin-center absolute bg-base-300 shadow-sm w-10 h-10 top-14">
                  <ul className="flex items-center justify-center gap-2 h-full">
                     <li>
                        <Link to='/login' className="underline h-6 min-h-0 btn-sm text-xs btn btn-ghost">Login</Link>
                     </li>
                     <li>
                        <Link to='/' className="underline h-6 min-h-0 btn-sm text-xs btn btn-ghost">Home</Link>
                     </li>
                     <li>
                        <Link to='/projects' className="underline h-6 min-h-0 btn-sm text-xs btn btn-ghost">Projects</Link>
                     </li>
                     <li>
                        <Link to='/teachers' className="underline h-6 min-h-0 btn-sm text-xs btn btn-ghost">Teachers</Link>
                     </li>
                     <li>
                        <Link to='/about' className="underline h-6 min-h-0 btn-sm text-xs btn btn-ghost">About</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="flex-1 hidden sm:block">
            <Link to='/login' className="h-6 min-h-0 group btn-sm text-xs btn btn-outline btn-ghost">
               <svg width="10" height="16" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="stroke-gray-50 group-hover:stroke-base-300 duration-200" fillRule="evenodd" clipRule="evenodd" d="M9.16032 16.1318C4.79764 16.1318 1.07202 16.818 1.07202 19.5659C1.07202 22.3139 4.77401 23.0246 9.16032 23.0246C13.523 23.0246 17.2475 22.3373 17.2475 19.5905C17.2475 16.8437 13.5466 16.1318 9.16032 16.1318Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="stroke-gray-50 group-hover:stroke-base-300 duration-200" fillRule="evenodd" clipRule="evenodd" d="M9.16039 12.2124C12.0234 12.2124 14.3438 9.79749 14.3438 6.81933C14.3438 3.84118 12.0234 1.42737 9.16039 1.42737C6.29742 1.42737 3.97586 3.84118 3.97586 6.81933C3.96622 9.78743 6.27164 12.2024 9.12387 12.2124H9.16039Z" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
               <span>Login</span>
            </Link>
         </div>
         
         <ul className="menu menu-horizontal bg-base-200 rounded-box mr-4 hidden sm:inline-flex">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/teachers'>Teachers</Link></li>
            <li><Link to='/about'>About</Link></li>
         </ul>

         <label className="swap swap-rotate">
            <input checked={themeWeb == 'light'} type="checkbox" onChange={handdleChange} />
            <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
         </label>
      </nav>
   )
}
export default Navbar