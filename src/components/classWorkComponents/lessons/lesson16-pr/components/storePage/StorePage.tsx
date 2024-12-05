import { Link, useNavigate, useParams } from "react-router-dom";
import MyButton from "../../../../../homeWorkComponents/myComponents/myButton/MyButton";
import style from "./StorePage.module.css";
import { useEffect, useState } from "react";
import { IProduct } from "../types/types";
import useCart from "../../../../../homeWorkComponents/myComponents/useCart/useCart";
import { useFormik } from "formik";

export default function StorePage() {
  const navigate = useNavigate();
  const { addItemToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const formik = useFormik({
    initialValues: {
      quality: 1,
    },
    validateOnChange: false,
    onSubmit(values) {
      if (values.quality >= 1) {
        if (product) {
          addItemToCart({
            id: product.id,
            name: product.title,
            price: product.price,
            quality: values.quality,
          });
        }
      }
    },
  });

  const getProduct = (id: string) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => {
    getProduct(id as string);
  }, [id]);
  return (
    <div className={style.container}>
      {product ? (
        <>
          <MyButton name="Go back to store" func={() => navigate("../store")} />
          <h1>{product.title}</h1>
          <h2>Brand: {product.brand}</h2>
          <div className={style.imageContainer}>
            {product.images.map((img: string, index) => (
              <img
                key={index}
                className={style.preview}
                src={img}
                alt="preview img"
              />
            ))}
          </div>

          <span className={style.price}>{product.price}$</span>
          <div className={style.description}>{product.description}</div>
          <div className={style.buttonBox}>
            <form onSubmit={formik.handleSubmit}>
              <input
                className={style.input}
                name="quality"
                type="number"
                value={formik.values.quality}
                onChange={formik.handleChange}
              />
              <MyButton name="Add to cart" type="submit" bgColor="aqua" />
              <MyButton
                name="Buy now"
                type="submit"
                func={() => navigate("../../../cart")}
                bgColor="white"
              />
            </form>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
