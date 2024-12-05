export interface IProduct {
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

export interface ICartItem {
    id: number;
    name: string;
    price: number;
    quality: number;
}

export interface CartContextType {
    items: ICartItem[];
    addItemToCart: (item: ICartItem) => void;
    removeItemFromCart: (id: number) => void;
    clearCart: () => void;
}


export interface IUser {
    accessToken: string;
    email: string;
    firstName: string;
    gender: string;
    id: number;
    image: string;
    lastName: string;
    refreshToken: string;
    username: string;
}

export interface IAuthContextType {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    logOut:()=> void
}
