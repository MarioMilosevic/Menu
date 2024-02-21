import menu from "../data/data.js"
import Meal from './Meal'

const Main = () => {
  return (
    <main className="grid grid-cols-3 w-[1200px] gap-6 mx-auto py-8 ">
    {menu.map((meal) => {
     return <Meal {...meal} key={meal.id}/>
    })}
   </main>
  )
}

export default Main
