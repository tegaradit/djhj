import { useEffect, useState } from "react"

export default function ({ children, waitFor, ...rest }) {
   const [isLoading, setIsloading] = useState(waitFor || false)
   useEffect(() => {
      if (waitFor) setIsloading(false)
   }, [waitFor])

   return (
      <button onClick={() => setIsloading(true)} {...rest}>
         <div style={{height:'2rem', minHeight: '0rem', fontSize: '0.8rem'}} className={`${isLoading ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'} w-full btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg`}>
            {isLoading ? 'loading' : <span className={`${isLoading ? 'opacity-50' : 'opacity-100'} transition-opacity`}>{children}</span>}
            {isLoading ? <span className="loading loading-spinner"></span> : ''}
         </div>
      </button>
   )
}