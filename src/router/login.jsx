import { Form, useActionData } from "react-router-dom"
import { useFetch } from "../hooks/hooks";
import { LoadingButton } from "../components/components";
import { useEffect, useRef } from "react";

export async function action({ request }) {
   const form = await request.formData()
   return await useFetch('https://api.pplgsmenza.id/admin/login', 'POST', 'application/json', {
      username: form.get('username'),
      password: form.get('password'),
   })
}

export default function Login() {
   const actionData = useActionData()
   const lightRef = useRef()
   const formRef = useRef()

   let lightRect;
   let formRect;
   useEffect(() => {
      lightRect = lightRef.current.getBoundingClientRect()
      formRect = formRef.current.getBoundingClientRect()
   }, [lightRef, formRef])
   function handdleMouseMove(ev) {
      if (lightRect && formRect) {
         lightRef.current.style.transform = `translate(${ev.nativeEvent.layerX - lightRect.width / 2.5}px, ${((formRect.height / 2) + (ev.nativeEvent.layerY - lightRect.height)) / 2}px)`;
      }
   }

   return (
      <div className="w-full h-screen bg-gradient-to-br from-slate-950 to-slate-800 text-white flex justify-center items-center">
         <div role="alert" className="fixed w-96 self-start alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Login Berhasil!</span>
         </div>
         <Form ref={formRef} onMouseMove={handdleMouseMove} method="POST" className="relative form-control w-full max-w-xs items-stretch justify-center group bg-slate-500/10 p-[3rem_1.5rem] overflow-hidden rounded-xl gap-4">
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

            <LoadingButton type="submit" waitFor={actionData}>Login</LoadingButton>

            <div ref={lightRef} style={{background: 'radial-gradient(cyan, transparent 50%)'}} className="pointer-events-none group-hover:opacity-25 opacity-0 transition-opacity self-center duration-500 absolute w-96 h-96 blur-md rounded-full"></div>
         </Form>

      </div>
   )
}