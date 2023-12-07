import { Form, Link, useActionData, useNavigate } from "react-router-dom"
import { useCookie, useFetch } from "../hooks/hooks";
import { LoadingButton } from "../components/components";
import { useEffect } from "react";
import { LazyMotion, m, domAnimation, useSpring, useTransform } from "framer-motion"


export const actionLogin = async ({ request }) => {
   const cookie = useCookie('token')
   const form = await request.formData()

   let result
   if (!cookie.isExist()) {
      result = await useFetch('https://api.pplgsmenza.id/admin/login', 'POST', 'application/json', {
         username: form.get('username'),
         password: form.get('password'),
      }).then(res => {
         cookie.updateDataAndExpires(res.token, 1)
         return res
      }).catch(err => {
         console.log(err)
      })
   }
   
   return {
      token: cookie.isExist() || result.token,
      username: form.get('username'),
      password: form.get('password')
   }
}

const Login = () => {
   const actionData = useActionData()
   const navigate = useNavigate()
   
   useEffect(() => {
      if (actionData) {
         navigate('/auth', {
            state: {
               token: actionData.token, 
               username: actionData.username, 
               password: actionData.password 
            }
         })
      }
   }, [actionData])


   // login form effect
   const springOptions = {
      stiffness: 500, 
      damping: 90
   }
   const mouseX = useSpring(0, springOptions)
   const mouseY = useSpring(0, springOptions)
   const rotateX = useTransform(mouseX, [-150, 150], [-15, 15])
   const rotateY = useTransform(mouseY, [-150, 170], [15, -15])
   function handleMouse(event) {
      mouseX.set(event.pageX - (window.innerWidth / 2))
      mouseY.set(event.pageY - (window.innerHeight / 2))
   }


   return (
      <div className="w-full h-screen bg-gradient-to-br from-slate-950 to-slate-800 text-white flex justify-center items-center">
         <LazyMotion features={domAnimation}>
            <m.div
               onMouseMove={handleMouse}
               onMouseLeave={() => {
                  mouseX.set(0)
                  mouseY.set(0)
               }}
               style={{
                  rotateX,
                  rotateY
               }}
            >
               <Form method="POST" className="relative shadow-xl form-control w-80 items-stretch justify-center group bg-slate-500/10 p-[3rem_1.5rem] overflow-hidden rounded-xl gap-4">
                  <h1 className="text-center font-bold text-lg">Login</h1>

                  <div>
                     <label className="label">
                        <span className="label-text text-white">username</span>
                     </label>
                     <input type="text" name="username" className="bg-inherit input input-bordered w-full max-w-xs border focus:border-slate-500 border-slate-500" />
                  </div>
                  
                  <div className="mb-4">
                     <label className="label">
                        <span className="label-text text-white">password</span>
                     </label>
                     <input className="border border-slate-500 focus:border-slate-500 input input-bordered w-full max-w-xs bg-inherit" name="password" type="password" />
                  </div>

                  <div className="flex justify-stretch gap-3">
                     <Link to={'/'} className="btn btn-neutral grow btn-xs sm:btn-sm md:btn-md lg:btn-lg" style={{height:'2rem', minHeight: '0rem', fontSize: '0.8rem'}}>Home</Link>
                     <LoadingButton type="submit" className="grow" waitFor={actionData}>Login</LoadingButton>
                  </div>

                     <m.div 
                        style={{
                           background: 'radial-gradient(cyan, transparent 50%)',
                           x: mouseX,
                           y: mouseY
                        }}

                        className="pointer-events-none group-hover:opacity-10 opacity-0 transition-opacity self-center duration-500 absolute w-[40rem] h-[40rem] blur-md rounded-full"
                     />
               </Form>
            </m.div>
         </LazyMotion>
      </div>
   )
}
export default Login