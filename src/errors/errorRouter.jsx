import { Link } from 'react-router-dom'
import notFoundBg from '../assets/images/not-found.png'

const ErrorRouter = () => {
   return (
      <div style={{fontSize: 'clamp(14px, 2vw, 18px)'}} className='h-screen flex flex-col justify-center items-center'>
         <img className='object-cover w-[27em] h-[27em]' src={notFoundBg} alt="" loading='lazy' />
         <Link to={'/'} className='min-h-0 h-8 btn btn-outline btn-primary'>Back To Home</Link>
      </div>
   )
}
export default ErrorRouter