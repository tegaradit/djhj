import { useEffect, useState } from "react"

const LoadingButton = ({ children, waitFor, className, onClick, ...props }) => {
   const [isLoading, setIsloading] = useState(waitFor || false)
   useEffect(() => {
      if (waitFor) setIsloading(false)
   }, [waitFor])

   return (
      <button onClick={() => {setIsloading(true); onClick instanceof Function && onClick()}} style={{minHeight: 0, height: '2rem', fontSize: '0.8rem'}} className={`${isLoading ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'} ${className}`} {...props}>
         {isLoading ? 'loading' : <span className={`${isLoading ? 'opacity-50' : 'opacity-100'} transition-opacity`}>{children}</span>}
         {isLoading ? <span className="loading loading-spinner" /> : ''}
      </button>
   )
}
export default LoadingButton