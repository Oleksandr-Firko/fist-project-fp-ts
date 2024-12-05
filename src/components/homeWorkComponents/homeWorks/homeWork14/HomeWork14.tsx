import { Link } from "react-router-dom";
import style from "./HomeWork14.module.css";


export default function HomeWork14() {
  return (
    <div>
      <h1>Home work 14</h1>
      <Link className={style.btn} to={'../../../products'}>Go to the solution.</Link>
    </div>
  );
}
