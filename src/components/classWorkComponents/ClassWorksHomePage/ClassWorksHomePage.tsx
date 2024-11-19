import { NavLink, Outlet } from "react-router-dom";
import style from "./ClassWorksHomePage.module.css";


export default function ClassWorksHomePage() {
  return (
    <>
      <nav>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson01'>class work 01</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson02'>class work 02</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson03'>class work 03</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson04'>class work 04</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson05'>class work 05</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson06'>class work 06</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson07'>class work 07</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson08'>class work 08</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson09'>class work 09</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson10'>class work 10</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson10-pr'>practical work 10-pr</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson11'>class work 11</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson12'>class work 12</NavLink>
        <NavLink className={({isActive}) => isActive? style.activeLink: style.navBtn} to='lesson13'>class work 13</NavLink>
      </nav>
      <div className={style.contentBox}>
        <Outlet />
      </div>
    </>
  );
}
