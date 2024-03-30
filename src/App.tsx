import "./App.css";
import Navigation from "./components/Navigation.js";
import Products from "./components/Products.js";
import Heading from "./components/Heading.js";
import menu from "./data/data.ts";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState(menu);

  const filterArray = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = (e.target as HTMLButtonElement).getAttribute("name");
    console.log(target)
    let filteredArray;
    target === "All"
      ? (filteredArray = menu)
      : (filteredArray = menu.filter(
          (el) => el.category === target?.toLowerCase()
        ));
    setCurrent(filteredArray);
  };

  return (
    <>
      <Heading />
      <Navigation filterArray={filterArray} menu={menu} />
      <Products current={current} />
    </>
  );
}

export default App;
