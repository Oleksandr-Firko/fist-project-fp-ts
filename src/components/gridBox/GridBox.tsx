import React from "react";
import "./gridBox.css";

interface IGridBoxProp{
  children:React.ReactNode;
}


function GridBox({ children }:IGridBoxProp) {
  return <div className="grid-container">{children}</div>;
}

export default GridBox;
