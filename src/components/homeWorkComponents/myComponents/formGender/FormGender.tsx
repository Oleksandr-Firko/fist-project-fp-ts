import { useFormik } from "formik";
import MyInput from "../../../homeWorkComponents/myComponents/myInput/MyInput";
import MyButton from "../myButton/MyButton";
import style from "./formGender.module.css";
import { useState } from "react";
import * as Yup from "yup";

interface IFormValues {
  name: string;
}

interface IFetchNameResponse {
  count: number;
  name: string;
  gender: string;
  probability: number;
}
const schema = Yup.object().shape({
  name: Yup.string()
    .required("model is required")
    .min(2, "Minimal length is 2 characters!")
    .max(50, "Input is too long. Max 50 characters."),
});

export default function FormGender() {
  const [response, addResponse] = useState<IFetchNameResponse>();
  const formik = useFormik({
    initialValues: {
      name: "",
    } as IFormValues,

    validateOnChange: false,
    validationSchema: schema,

    onSubmit: (value: IFormValues, { resetForm }) => {
      console.log(value);
      fetchName(value.name);
    },
  });

  async function fetchName(value: string) {
    const res = await fetch(`https://api.genderize.io/?name=${value}`);
    const data: IFetchNameResponse = await res.json();
    addResponse(data);
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <MyInput
          name="name"
          type="text"
          placeholder="Enter your name"
          label="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></MyInput>
        {formik.errors.name ? (
          <div className={style.error}>{formik.errors.name}</div>
        ) : (
          ""
        )}
        <MyButton name="Send" type="submit" />
      </form>
      <span className={style.error}>{formik.errors.name}</span>
      {response && (
        <div className={style.resultBox}>
          <span>{response.count}</span>
          <span>{response.gender}</span>
          <span>{response.name}</span>
          <span>{response.probability}</span>
        </div>
      )}
    </div>
  );
}
