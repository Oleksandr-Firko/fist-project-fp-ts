import { Link, useParams } from "react-router-dom";
import style from "./productPage.module.css";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/type";
import Loader from "../loader/Loader";

export default function ProductPage() {
  const [loader, toggleLoader] = useState(true);
  const { id } = useParams();
  const [productData, setProductData] = useState<IProduct>({
    id: 0,
    title: "string",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const productFetch = async (id: string): Promise<void> => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data: IProduct = await res.json();
    setProductData(data);
    toggleLoader(false)
  };

  useEffect(() => {
    productFetch(String(id));
  }, [id]);

  return (
    <div className={style.container}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <h1>{productData.title}</h1>
          <div className={style.imgWrapper}>
            <img src={productData.image} alt={`${productData.title}`} />
          </div>
          <p>{productData.description}</p>
          <Link to={"/products"}>Go back </Link>
        </>
      )}
    </div>
  );
}
