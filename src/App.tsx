import React from "react";
import "./App.css";
import NavButton from "./components/NavButton";

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
      <main></main>
    </>
  );
}

// import React, { useState } from "react";

// interface ChildProps {
//   count: number;
// }

// const Child: React.FC<ChildProps> = ({ count }) => {
//   const [counter, setCounter] = useState(count);
//   const increment = () => {
//     setCounter((prev) => prev + 1);
//   };
export default App;
