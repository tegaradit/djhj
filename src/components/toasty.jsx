import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'

const TYPE = {
   "default": ['', 'hidden'],

   "error": [
      'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z', 
      'bg-red-800'
   ],

   "success": [
      'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', 
      'bg-gradient-to-br to-transparent text-cyan-400'
   ],

   "warning": [
      'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', 
      'bg-yellow-800'
   ],

   "info": [
      'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 
      'bg-blue-800'
   ]
}


export default function Toasty ({ toast = {type: 'default'} }) {
   const controls = useAnimationControls()

   useEffect(() => {
      controls.start('show')

      setTimeout(() => {
         controls.start('hide')
      }, toast.timeout)
   }, [toast.toast])

	return (
      <motion.div
         variants={{
            initial: {y: '-6rem'},
            show: {y: '0rem'},
            hide: {y: '-6rem'}
         }}

         initial='initial'
         animate={controls}
         transition={{
            duration: 0.3,
            ease: 'backInOut'
         }}

         role="alert"
         className={`${TYPE[toast.type][1]} fixed w-96 border-none alert top-40`}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d={TYPE[toast.type][0]}
            />
         </svg>
         <span>{toast.text}</span>
      </motion.div>
	)
}

export function useToasty() {
   const [toast, setToast] = useState()

   const trigger = (text, type, timeout) => {
      setToast({text, type, timeout})
   }

   return {toast, trigger}
}