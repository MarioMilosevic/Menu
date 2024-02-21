import "./App.css";
import NavButton from "./components/NavButton";
import Meal from "./components/Meal.js";
import menu from "./data/data.js"
function App() {
  return (
    <>
      <h1 className="text-4xl font-normal text-center pb-4 tracking-wider">
        Our Menu
      </h1>
      <div className="w-28 h-1 bg-orange-400 mx-auto"></div>
      <nav className="flex justify-center p-6 gap-4">
        <NavButton name={"All"} />
        <NavButton name={"Breakfast"} />
        <NavButton name={"Lunch"} />
        <NavButton name={"Shakes"} />
      </nav>
      <main className="grid grid-cols-3 w-[1200px] gap-6 mx-auto py-8 ">
       {menu.map((meal) => {
        return <Meal {...meal} key={meal.id}/>
       })}
      </main>
    </>
  );
}

export default App;
