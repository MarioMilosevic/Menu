import React from "react";

const NavButton = (props) => {
  return (
    <button className="px-4 py-1 rounded-lg bg-orange-400 text-white">
      {props.name}
    </button>
  );
};

export default NavButton;
