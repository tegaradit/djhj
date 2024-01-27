import { useNavigation } from "react-router-dom"

const LoadingButton = ({ children, className, onClick, ...props }) => {
   const { state } = useNavigation()

   return (
      <button onClick={() => {onClick instanceof Function && onClick()}} style={{minHeight: 0, height: '2rem', fontSize: '0.8rem'}} className={`${state != 'idle' ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'} ${className}`} {...props}>
         {state != 'idle' ? 'loading' : <span className={`${state != 'idle' ? 'opacity-50' : 'opacity-100'} transition-opacity`}>{children}</span>}
         {state != 'idle' ? <span className="loading loading-spinner" /> : ''}
      </button>
   )
}
export default LoadingButton