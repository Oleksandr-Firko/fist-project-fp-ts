import { useEffect, useState } from "react";
import style from "./store.module.css";
import StoreCard from "../storeCard/StoreCard";
import MyButton from "../../../../lessonsComponents/myButton/MyButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IProduct } from "../types/types";

interface IResponse {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

const schema = Yup.object().shape({
  limit: Yup.number().required().integer(),
});

export default function Store() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const formik = useFormik({
    initialValues: {
      limit: 1,
    },
    validateOnChange: false,
    validationSchema: schema,
    onSubmit(values, { resetForm }) {
      productsFetch(values.limit);
    },
  });

  const productsFetch = async (limit: number) => {
    //
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    const data: IResponse = await res.json();
    console.log(data);
    setProducts(data.products);
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className={style.formContainer}>
        <form onSubmit={formik.handleSubmit}>
          <input
            onChange={formik.handleChange}
            name="limit"
            type="number"
            value={formik.values.limit}
          ></input>
          <MyButton myType="submit" text="Get products" isDanger={false}/>
        </form>
      </div>
      <div className={style.container}>
        {products.map((product: IProduct) => (
          <StoreCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            reviews={product.reviews}
            images={product.images}
            thumbnail={product.thumbnail}
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </div>
    </>
  );
}
