import style from "./cartItem.module.css";
import crossImg from '../../assets/redCross.png'

interface ICartItemProps {
  name: string;
  price: number;
  quality: number;
  func: () => void;
}

export default function CartItem({
  name,
  price,
  quality,
  func,
}: ICartItemProps) {
  return (
    <div className={style.container}>
      <span className={style.name}>{name}</span>
      <span className={style.price}>{price}</span>
      <span className={style.quality}>{quality}</span>
      <div className={style.deleteBtn} onClick={func}>
        <img src={crossImg} alt="icon" />
      </div>
    </div>
  );
}
