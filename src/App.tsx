import "./App.css";
import Navigation from "./components/Navigation.js";
import Main from "./components/Main.js";
import Heading from "./components/Heading.js";
import menu from "./data/data.js";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState(menu);

  const filterArray = (category:string) => {
    const categoryLowerCase = category.toLowerCase();
    let filteredArray
    if(categoryLowerCase !== 'all'){
      filteredArray = menu.filter((element) => element.category === categoryLowerCase);
      return filteredArray
    } else {
      filteredArray = menu
      return filteredArray
    }
  };

  return (
    <>
      <Heading />
      <Navigation current={current} filterArray={filterArray} setCurrent={setCurrent}/>
      <Main current={current} filterArray={filterArray}/>
    </>
  );
}

export default App;
