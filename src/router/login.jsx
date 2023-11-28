import { Form, Link, useActionData } from "react-router-dom"
import { useFetch } from "../hooks/hooks";
import { LoadingButton } from "../components/components";
import Toasty, { useToasty } from "../components/toasty";
// import { useEffect, useRef } from "react";


export async function actionLogin({ request }) {
   const form = await request.formData()
   return await useFetch('https://api.pplgsmenza.id/admin/login', 'POST', 'application/json', {
      username: form.get('username'),
      password: form.get('password'),
   })

   
}

export default function Login() {
   const actionData = useActionData()
   // const lightRef = useRef()
   // const formRef = useRef()

   // let lightRect;
   // let formRect;
   // useEffect(() => {
   //    lightRect = lightRef.current.getBoundingClientRect()
   //    formRect = formRef.current.getBoundingClientRect()
   // }, [lightRef, formRef])
   // function handdleMouseMove(ev) {
   //    if (lightRect && formRect) {
   //       lightRef.current.style.transform = `translate(${ev.nativeEvent.layerX - lightRect.width / 2.5}px, ${((formRect.height / 2) + (ev.nativeEvent.layerY - lightRect.height)) / 2}px)`;
   //    }
   // }

   const {toast, trigger} = useToasty()
   return (
      <div className="w-full h-screen bg-gradient-to-br from-slate-950 to-slate-800 text-white flex justify-center items-center">
         <Link to={'/'}>Home</Link>

         <Toasty toast={toast} />

         <Form onClick={() => trigger('login success', 'success', 3000)} /* ref={formRef} onMouseMove={handdleMouseMove} */ method="POST" className="relative form-control w-full max-w-xs items-stretch justify-center group bg-slate-500/10 p-[3rem_1.5rem] overflow-hidden rounded-xl gap-4">
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

            {/* <div ref={lightRef} style={{background: 'radial-gradient(cyan, transparent 50%)'}} className="pointer-events-none group-hover:opacity-25 opacity-0 transition-opacity self-center duration-500 absolute w-96 h-96 blur-md rounded-full"></div> */}
         
         </Form>
      </div>
   )
}