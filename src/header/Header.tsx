import { useEffect } from "react";
import styles from "./header.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useCart from "../components/homeWorkComponents/myComponents/useCart/useCart";
import { useAuth } from "../components/homeWorkComponents/myComponents/context/AuthContext";
import MyButton from "../components/homeWorkComponents/myComponents/myButton/MyButton";

export default function Header(): JSX.Element {
  // const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const location = useLocation();
  const { items } = useCart();
  const navigate = useNavigate();

  // const redirect = () => {
  //   if (!user.accessToken && location.pathname !== "/login") {
  //     navigate("/login");
  //   }
  // };

  useEffect(() => {
    //redirect();
  }, [location, items, user]);
  return (
    <header>
      {user.accessToken ? (
        <>
          <div className={styles.container}>
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
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.btn
                }
                to="store"
              >
                Store
              </NavLink>
              <div className={styles.cartWrapper}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : styles.btn
                  }
                  to="cart"
                >
                  Cart
                </NavLink>
                <div className={styles.cartItemsQuality}>{items.length}</div>
              </div>
            </div>
            <div className={styles.userDataBox}>
              <span>Welcome, {user.username}!</span>
              <button className={styles.btn} onClick={logOut}>
                Logout
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.loginBtn}>
          <MyButton
            name="Login"
            func={() => {
              navigate("./login");
            }}
          />
        </div>
      )}
    </header>
  );
}
