import { Link } from 'react-router-dom'

const ErrorRouter = () => {
   return (
      <div style={{fontSize: 'clamp(14px, 2vw, 18px)'}} className='h-screen flex flex-col justify-center items-center'>
         <h1 className="text-[5em] font-bold text-red-500">404</h1>
         <p>Halaman tidak di temukan</p>
         <Link to={'/'} className='min-h-0 h-8 btn btn-outline mt-6 btn-primary'>kembali ke home</Link>
      </div>
   )
}
export default ErrorRouter