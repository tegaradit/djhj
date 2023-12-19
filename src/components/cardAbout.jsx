import { useState } from 'react'
import { m, useMotionValue } from "framer-motion"
import icons from './icons'


const CardLoop = ({ item }) => {
   const [onFlip, setOnSplit] = useState(false)
   const rotateY = useMotionValue(0)

   return (
      <div 
         onMouseOver={() => {
            rotateY.set(180)
            setOnSplit(true)
         }}
         onMouseLeave={() => {
            rotateY.set(0)
            setOnSplit(false)
         }}
         
         className='w-56 h-96 rounded-box transform-gpu'
      >
         <m.div
            initial={{
               rotateY: 0,
            }}
            style={{
               rotateY,
               transitionTimingFunction: 'cubic-bezier(0.4, 0.43, 0.3, 1.5)'
            }}
            className='relative w-56 h-96 p-4 bg-base-300 rounded-box text-center transition-transform duration-700'
         >
            {/* Front */}
            <div className={`${onFlip ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700 delay-100`}>
               <img className='object-cover aspect-square rounded-box mb-4' src={item.foto_profil} alt="" />
               <h3 className='text-xs'>XI PPLG 7</h3>
               <h2 className='mb-4 text-base'>{item.nama}</h2>
               <h1 className='font-bold'>{item.jabatan}</h1>
            </div>

            {/* Back */}
            <div className={`${!onFlip ? 'opacity-0' : 'opacity-100'} p-4 transition-opacity duration-700 delay-100 absolute top-1/4 left-0 rounded-box bg-base-300 w-full h-fit`} style={{transform: 'rotateY(180deg)'}}>
               <p>Hobby, {item.hobby}</p>
               <p>Alamat. {item.alamat}</p>
               <p className='mb-6'>NISN, {item.nisn}</p>

               <a href={item.ig} className='inline-block mr-4'><icons.instagram width={30} height={30} /></a>
               <a href={item.github} className='inline-block'><icons.github width={30} height={30} /></a>
            </div> 
         </m.div>
      </div>
   )
}


const CardAbout = ({ data, className = ''}) => {


   return (
      <div className={className} style={{perspective: 1000}}>
         {data.map(item => <CardLoop item={item} key={item.id} />)}
      </div>
   )
}
export default CardAbout