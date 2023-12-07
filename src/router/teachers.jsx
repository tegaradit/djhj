import { useOutletContext } from "react-router-dom"
import { CardTeacher } from "../components/components"


const Teachers = () => {
   /**@type {Array} */
   const data = useOutletContext()
   console.log(data)

   return (
      <div className="p-8 flex gap-8 justify-evenly flex-wrap">
         {data.map(guru => {
				return <CardTeacher data={guru} key={guru.id} />
         })}
      </div>
   )
}

export default Teachers