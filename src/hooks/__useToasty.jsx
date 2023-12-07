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

export default () => {
   const [show, trigert] = useState({
      type: 'default',
      text: '',
      duration: 3000
   })
   
   const Toasty = () => {
      const [isShow, setIsShow] = useState(false)
      const controls = useAnimationControls()

      useEffect(() => {
         if (show.type != 'default' && !isShow) {
            controls.start('show')
            setIsShow(true)
            console.log(isShow)
            setTimeout(() => {
               controls.start('hide')
               console.log(isShow)
               setIsShow(false)
            }, show.duration)
         }
      }, [show])


      return (
         <motion.div
            variants={{
               initial: {
                  y: '-3rem',
                  opacity: 0
               },
               show: {
                  y: '0rem',
                  opacity: 1
               },
               hide: {
                  y: '-3rem',
                  opacity: 0
               },
            }}
   
            initial='initial'
            animate={controls}
            transition={{
               duration: 0.5,
               ease: 'backInOut'
            }}
   
            role="alert"
            className={`${TYPE[show.type][1]} z-[9999999999] fixed w-96 border-none alert top-20`}
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
                  d={TYPE[show.type][0]}
               />
            </svg>
            <span>{show.text}</span>
         </motion.div>
      )
   }

   return [trigert, Toasty]
}
