import { useOutletContext } from "react-router-dom"
import CardTeacher from "../components/cardTeacher"


export const Teachers = () => {
   /**@type {Array} */
   const data = useOutletContext().dataGuru

   return (
      <main className="p-8 flex gap-8 justify-evenly flex-wrap">
         {data.map(guru => {
				return <CardTeacher data={guru} key={guru.id} />
         })}
      </main>
   )
}
