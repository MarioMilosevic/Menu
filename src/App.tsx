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
  // filterArray treba da primi event kao parametar i to :
  // 1a automatski u onClick na button
  // 1b eksplicitno, ja ga prosljedjuem
  // 2b kad ja prosledjujem eksplicitno dodaj jos jedan parametar tipa string i console loguj ih
  const filterArray = (e) => {
    const target = e.target.innerText;
    let filteredArray;
    target === "All"
      ? (filteredArray = menu)
      : (filteredArray = menu.filter(
          (el) => el.category === target.toLowerCase()
        ));
    setCurrent((prev) => (prev = filteredArray));
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
