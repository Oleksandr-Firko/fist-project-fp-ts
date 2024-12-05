import { createContext, useState } from "react";
import { CartContextType, ICartItem } from "../../types/type";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItem] = useState<ICartItem[]>([]);
  const addItemToCart = (product: ICartItem) => {
    setItem((prevCart: ICartItem[]) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item: ICartItem) =>
          item.id === product.id
            ? { ...item, quality: item.quality + product.quality }
            : item
        );
      }
      return [...prevCart, { ...product }];
    });
  };

  const removeItemFromCart = (id: number) => {
    setItem((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItem([]);
  };

  return (
    <CartContext.Provider
      value={{ items, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
