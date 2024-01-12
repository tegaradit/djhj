import { AnimatePresence, m } from "framer-motion"
import { useEffect } from "react"


const SubPage = ({ trigert, children, className }) => {
   const [{isOpen, clientRect}, setter] = trigert

   useEffect(() => {
      if (isOpen) document.body.style.overflow = 'hidden'
      else document.body.style.overflow = 'auto'
      
      if (document.getElementById('exit-sub-page')) {
         document.getElementById('exit-sub-page').addEventListener('click', () => {
            setter({open: false, clientRect})
         })
      }
   }, [isOpen])


   return (
      <div className={`${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} h-screen overflow-y-auto w-full fixed left-0 top-0 z-[9999]`}>
         <AnimatePresence>
            {isOpen ? (
               <>
                  <div className='fixed top-0 left-0 overflow-hidden w-full h-full -z-10'>
                     <m.div 
                        animate={{
                           scale: [0, 1]
                        }}
                        exit={{
                           scale: 0
                        }}
                        transition={{
                           duration: 1,
                           ease: 'anticipate',
                        }}

                        style={{
                           x: `calc(${clientRect.x}px - 150vmax + ${clientRect.width / 2}px)`,
                           y: `calc(${clientRect.y}px - 150vmax + ${clientRect.height / 2}px)`,
                           width: '300vmax',
                           height: '300vmax',
                           borderRadius: '50%'
                        }}
                        className="bg-base-300 absolute top-0 left-0 -z-10"
                     />
                  </div>
                  <m.div
                     animate={{
                        opacity: [0, 1],
                        y: [-30, 0]
                     }}
                     exit={{
                        opacity: 0,
                        y: -30
                     }}
                     transition={{
                        duration: 0.35,
                        delay: 0.3
                     }}

                     className={className}
                  >
                     {children}
                  </m.div>
               </>
            ) : ''}
         </AnimatePresence>
      </div>
   )
}

export default SubPage