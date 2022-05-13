import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ handleChangeColor, color}) {
  
  
  function handleClick(){
    const newRandomColorChild = getRandomColor()
    handleChangeColor(newRandomColorChild)
  }
  
  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
