import { Link } from "react-router-dom";
import style from "./ShopProduct.module.css";
import { IProduct } from "../../types/type";

export default function ShopProduct({
  id,
  title,
  price,
  image,
  rating,
}: IProduct) {
  return (
    <div className={style.container}>
      <h3>{title}</h3>
      <div className={style.imgWrapper}>
        <img src={image} alt={`img of ${title}`} />
      </div>
      <div className="d-f-row j-c-space-between">
        <span className={style.rate}>Rate:{rating.rate}</span>
        <span className={style.count}>Count:{rating.count}</span>
      </div>
      <div className="d-f-row j-c-space-between a-i-center">
        <span className={style.price}>{price}</span>
        <Link className={style.toProdBtn} to={String(id)}>
          To product
        </Link>
      </div>
    </div>
  );
}
