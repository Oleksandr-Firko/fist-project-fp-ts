import style from "./cart.module.css";
import useCart from "../useCart/useCart";
import CartItem from "../cartItem/CartItem";
import { ICartItem } from "../../types/type";

export default function Cart() {
  const { items, removeItemFromCart, clearCart } = useCart();

  return (
    <div className={style.container}>
      <h1>Your cart</h1>
      {items.length === 0 ? (
        <span className={style.emptyCart}>Your cars is empty.</span>
      ) : (
        <div className={style.itemContainer}>
          {items?.map((item: ICartItem) => (
            <CartItem
              name={item.name}
              price={item.price}
              quality={item.quality}
              func={() => removeItemFromCart(item.id)}
            />
          ))}
        </div>
      )}
      {items.length === 0 ? (
        ""
      ) : (
        <button onClick={clearCart}>Clear cart</button>
      )}
    </div>
  );
}
