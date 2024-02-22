import "./App.css";
import Navigation from "./components/Navigation.js";
import Main from "./components/Main.js";
import Heading from "./components/Heading.js";
import menu from "./data/data.js";
import { useState } from "react";

type Element = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

function App() {
  const [current, setCurrent] = useState(menu);

  const filterArray = (e) => {
    const target = e.target.innerText;
    let filteredArray;
    target === "All"
      ? (filteredArray = menu)
      : (filteredArray = menu.filter(
          (el) => el.category === target.toLowerCase()
        ));
    setCurrent(filteredArray);
  };

  return (
    <>
      <Heading />
      <Navigation filterArray={filterArray} menu={menu} />
      <Main current={current} />
    </>
  );
}

export default App;
