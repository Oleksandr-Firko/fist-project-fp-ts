import { useState } from "react";
import GridBox from "../gridBox/GridBox";
import Loader from "../loader/Loader";
import MyInput from "../myInput/MyInput";
import style from "./products.module.css";
import ShopProduct from "../productCard/ShopProduct";
import { useFormik } from "formik";
import * as Yup from "yup";
import MyButton from "../myButton/MyButton";

const schema = Yup.object().shape({
  limit: Yup.number()
    .required()
    .positive()
    .integer()
    .min(1, "Min:1 ")
    .max(20, "Max:20"),
});

interface IFormValues {
  limit: number;
}

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

interface IRating {
  rate: number;
  count: number;
}

export default function Products() {
  const [loader, setLoader] = useState<boolean>(false);
  const [products, addProduct] = useState<IProduct[]>([]);

  const formik = useFormik({
    initialValues: {
      limit: 0,
    } as IFormValues,
    validateOnChange: false,
    validationSchema: schema,
    onSubmit(values: IFormValues, { resetForm }) {
      setLoader(true);
      fetchProducts(values.limit);
      resetForm();
    },
  });

  const fetchProducts = async (values: number) => {
    const res = await fetch(
      `https://fakestoreapi.com/products?limit=${values}`
    );
    const data: IProduct[] = await res.json();
    addProduct(data);
    setLoader(false);
  };

  return (
    <div className={style.container}>
      <div>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <MyInput
            name="limit"
            type="number"
            label="Items quality:"
            onChange={formik.handleChange}
            value={formik.values.limit}
            horizontalLabel={true}
          />

          <MyButton name="Submit" type="submit" />
        </form>
        {formik.errors.limit ? (
          <span className={style.error}>{formik.errors.limit}</span>
        ) : (
          ""
        )}
      </div>
      {loader ? <Loader /> : ""}
      <GridBox>
        {products.map((product: IProduct) => (
          <ShopProduct
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
            description={product.description}
            category={product.category}
          />
        ))}
      </GridBox>
    </div>
  );
}
