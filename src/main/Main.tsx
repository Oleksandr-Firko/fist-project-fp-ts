import { Outlet, useLocation } from "react-router-dom";
import style from "./main.module.css";
import { useEffect } from "react";
import cn from "classnames";
import { useAuth } from "../components/homeWorkComponents/myComponents/context/AuthContext";

export default function Main() {
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {}, [location, user]);

  return (
    <main
      className={cn([
        location.pathname === "/products" ||
        location.pathname.includes("/products/")
          ? style.main
          : style.storeMain,
      ])}
    >
      {user.accessToken || location.pathname === "/login" ? (
        <Outlet />
      ) : (
        <span className={style.loginMessage}>
          "Для просмотра уроков необходимо авторизоваться."
        </span>
      )}
    </main>
  );
}
