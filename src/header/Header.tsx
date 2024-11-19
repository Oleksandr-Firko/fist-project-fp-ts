import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header>
      <div className={styles.linkBox}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.btn
          }
          to="home-works-home-page"
        >
          Home works
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.btn
          }
          to="class-works-home-page"
        >
          Class works
        </NavLink>
      </div>
    </header>
  );
}
