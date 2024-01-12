import icons from "./icons"
import { useContext } from "react"
import { AppContext } from "../router/root"

const TitlePage = ({ title, content, width = 76, defaultText = true, className }) => {
   const [theme, _] = useContext(AppContext).theme
   const svgVariant = [
      <icons.circle width={300} height={200} color={theme == 'dark' ? 'cyan' : 'purple'} style={{rotate: Math.random() * 360 + 'deg' }} />,
      <icons.square width={300} height={200} color={theme == 'dark' ? 'cyan' : 'purple'} style={{rotate: Math.random() * 360 + 'deg' }} />,
      <icons.treeangel width={300} height={200} color={theme == 'dark' ? 'cyan' : 'purple'} style={{rotate: Math.random() * 360 + 'deg' }} />
   ]

   return (
      <div className={"w-full h-fit sm:h-52 mt-8 self-center mb-4 shadow-sm" + className} style={{maxWidth: `${width}rem`}}>
         <div className={`overflow-hidden relative rounded-box bg-gradient-to-br from-base-300 ${theme == 'dark' ? 'to-cyan-900/30' : 'to-purple-700/30'} h-full w-full p-6`}>
            <h1 className="text-2xl sm:text-3xl text-center sm:text-left sm:leading-normal">
               <span className={`text-transparent bg-gradient-to-r ${theme == 'dark' ? 'from-cyan-600 to-cyan-300 border-cyan-400' : 'from-purple-950 to-purple-800 border-purple-950'} bg-clip-text border-b`} style={{WebkitBackgroundClip: 'text'}}>{title}</span> {content}<br />
               {defaultText ?
                  <>
                     <span className={`${theme == 'dark' ? 'text-cyan-400' : 'text-purple-800'} font-bold`}>P</span>engembangan <span className={`${theme == 'dark' ? 'text-cyan-400' : 'text-purple-800'} font-bold`}>P</span>erangkat <br />
                     <span className={`${theme == 'dark' ? 'text-cyan-400' : 'text-purple-800'} font-bold`}>L</span>unak dan <span className={`${theme == 'dark' ? 'text-cyan-400' : 'text-purple-800'} font-bold`}>G</span>ame
                  </> : ''
               }
            </h1>

            <div className='absolute top-0 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 opacity-30 sm:right-0 sm:opacity-50'>
               {svgVariant[Math.floor(Math.random() * 3)]}
            </div>
         </div>
      </div>
   )
}

export default TitlePage