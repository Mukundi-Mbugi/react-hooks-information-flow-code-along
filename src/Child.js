import React from "react";


function Child({ handleChangeColor }) {

  
  return <div onClick={handleChangeColor} className="child" style={{ backgroundColor: "#FFF" }} />;
}

export default Child;
