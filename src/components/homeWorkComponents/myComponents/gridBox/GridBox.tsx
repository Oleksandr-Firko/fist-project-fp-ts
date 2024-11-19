import style from "./gridBox.module.css";

interface IGridBoxProp{
  children:React.ReactNode;
}


function GridBox({ children }:IGridBoxProp) {
  return <div className={style.gridContainer}>{children}</div>;
}

export default GridBox;
