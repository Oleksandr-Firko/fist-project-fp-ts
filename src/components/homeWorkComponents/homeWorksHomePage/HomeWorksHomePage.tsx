import { NavLink, Outlet } from "react-router-dom";
import styles from "./HomeWorksHomePage.module.css";

export default function HomeWorkHomePage() {
  return (
    <>
      <nav>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work1"}>
          home work 1
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work2"}>
          home work 2
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work3"}>
          home work 3
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work4"}>
          home work 4
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work5"}>
          home work 5
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work6"}>
          home work 6
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work7"}>
          home work 7
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work8"}>
          home work 8
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work9"}>
          home work 9
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work10"}>
          home work 10
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work11"}>
          home work 11
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work12"}>
          home work 12
        </NavLink>
        <NavLink className={({isActive})=>isActive? styles.linkActive : styles.navBtn} to={"home-work13"}>
          home work 13
        </NavLink>
      </nav>
      <div className={styles.contentBox}>
        <Outlet />
      </div>
    </>
  );
}
