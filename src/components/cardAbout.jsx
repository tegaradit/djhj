import { useState } from 'react'
import exampleImg from '../assets/images/example-profile.jpg'
import { LazyMotion, m, domAnimation, useMotionValue } from "framer-motion"


const CardAbout = ({ data, className = ''}) => {
   const [onFlip, setOnSplit] = useState(false)
   const rotateY = useMotionValue(0)

   return (
      <div className={className} style={{perspective: 1000}}>
         <LazyMotion features={domAnimation}>
            {data.map(item => (
               <m.div 
                  initial={{
                     rotateY: 0,
                  }}
                  style={{
                     rotateY,
                     transitionTimingFunction: 'cubic-bezier(0.4, 0.43, 0.3, 1.5)'
                  }}
                  onMouseOver={() => {
                     rotateY.set(180)
                     setOnSplit(true)
                  }}
                  onMouseLeave={() => {
                     rotateY.set(0)
                     setOnSplit(false)
                  }}

                  key={item.id} 
                  className='relative w-56 h-96 p-4 bg-base-300 rounded-box text-center transition-transform transform-gpu duration-700'
               >
                  <div className={`${false ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700 delay-200`}>
                     <img className='object-cover aspect-square rounded-box mb-4' src={item.foto_profil} alt="" />
                     <h3 className='text-xs'>XI PPLG 1</h3>
                     <h2 className='mb-4 text-base'>{item.nama}</h2>
                     <h1 className='font-bold'>{item.jabatan}</h1>
                  </div>

                  <div className={`${onFlip ? 'z-10' : '-z-10'} transition-opacity duration-700 delay-200 absolute top-0 left-0 rounded-box bg-base-300 w-full h-full`} style={{transform: 'rotateY(180deg)'}}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae rem dolores quaerat placeat pariatur, architecto in magni, ea repellat libero sunt similique, fugiat cum iure? Itaque provident eveniet nobis?
                  </div> 
               </m.div>
            ))}
         </LazyMotion>
      </div>
   )
}
export default CardAbout