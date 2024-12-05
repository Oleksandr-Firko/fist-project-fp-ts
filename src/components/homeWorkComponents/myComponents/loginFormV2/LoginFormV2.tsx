import { useFormik } from "formik";
import { useAuth } from "../context/AuthContext";
import MyButton from "../../../classWorkComponents/lessonsComponents/myButton/MyButton";
import MyInput from "../../../classWorkComponents/lessonsComponents/myInput/MyInput";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import style from "./loginFormV2.module.css";

const schema = Yup.object().shape({
  username: Yup.string()
    .required("Username field shouldn't be empty.")
    .min(3, "Min length:3."),
  password: Yup.string()
    .required("Password field shouldn't be empty.")
    .min(6, "Min password length:6"),
});

function LoginForm() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: "emilys",
      password: "emilyspass",
    },
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values) => {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          navigate("/");
        });
    },
  });

  return (
    <form className={style.loginForm} onSubmit={formik.handleSubmit}>
      <MyInput
        onChange={formik.handleChange}
        value={formik.values.username}
        name={"username"}
        type={"text"}
        label={"Type your username:"}
        placeholder={"username"}
      />
      {formik.errors.username ? (
        <span className={style.errorMessage}>{formik.errors.username}</span>
      ) : (
        ""
      )}
      <MyInput
        onChange={formik.handleChange}
        value={formik.values.password}
        name={"password"}
        type={"password"}
        label={"Type your pass:"}
        placeholder={"password"}
      />
      {formik.errors.password ? (
        <span className={style.errorMessage}>{formik.errors.password}</span>
      ) : (
        ""
      )}
      <MyButton myType={"submit"} text={"submit"} isDanger={false} />
    </form>
  );
}

export default LoginForm;
