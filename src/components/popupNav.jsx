import { stagger, useAnimate } from "framer-motion"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const PopupNav = ({ isOpen, className, content, windowDevision = 2 }) => {

   const [scope, animate] = useAnimate()
   const animateConfig = {
      duration: 0.5,
      ease: 'anticipate',
   }
   useEffect(() => {
      animate(scope.current, 
         {
            y: [-70 * Number(!isOpen), -70 * Number(isOpen)],
            scale: [Number(isOpen), Number(!isOpen)]
         },
         { 
            ...animateConfig,
            delay: (0.6 * Number(isOpen))
         }
      )
         
      animate(scope.current, 
         {
            borderRadius: 20 * Number(!isOpen),
            x: (((window.innerWidth / windowDevision) - 100) - 185) * Number(!isOpen),
            height: 40 + 15 * Number(!isOpen),
            width: 40 + 360 * Number(!isOpen)
         },
         {
            ...animateConfig,
            delay: (0.2 * Number(!isOpen)) + (0.4 * Number(isOpen))
         }
      )

      animate('ul li', 
         {
            scale: [Number(isOpen), Number(!isOpen)]
         },
         {
            ...animateConfig,
            delay: stagger(0.1, {startDelay: 0.3 * Number(!isOpen), from: 'center'})
         }
      )
   }, [isOpen])

   return (
      <div ref={scope} className={className + ` scale-0 border border-current select-none origin-center absolute shadow-sm w-10 h-10 top-14`}>
         <ul className="flex items-center justify-center gap-2 h-full">
            {Object.entries(content).map(([key, val], idx) => (
               <li key={idx}>
                  <Link to={val} className="underline h-6 min-h-0 btn-sm text-xs btn btn-ghost">{key}</Link>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default PopupNav