import "./loginForm.css";
import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";

function LoginForm(params) {
  return (
    <form className="form-container">
      <MyInput
        name={"login"}
        type={"text"}
        placeholder={"Enter your login"}
        label={"Login"}
      />
      <MyInput
        name={"email"}
        type={"email"}
        placeholder={"Enter your email"}
        label={"E-mail"}
      />
      <MyInput
        name={"pass"}
        type={"password"}
        placeholder={"Enter your password"}
        label={"Password"}
      />
      <MyButton type={"submit"} name={"Submit"} />
    </form>
  );
}

export default LoginForm;
