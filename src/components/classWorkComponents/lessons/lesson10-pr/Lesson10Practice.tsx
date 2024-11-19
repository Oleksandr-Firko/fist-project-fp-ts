import { NavLink, Outlet } from "react-router-dom";
import style from "./Lesson10Practice.module.css";
export default function Lesson10Practice() {
  return (
    <>
      <nav>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to="lesson10-pr-first-part">first part</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to="lesson10-pr-second-part">second part</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
