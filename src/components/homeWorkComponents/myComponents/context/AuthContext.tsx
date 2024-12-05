import { createContext, useContext, useState } from "react";
import { IAuthContextType, IUser } from "../../types/type";

const initialUser: IUser = {
  accessToken: "",
  email: "",
  firstName: "",
  gender: "",
  id: 0,
  image: "",
  lastName: "",
  refreshToken: "",
  username: "",
};

export const AuthContext = createContext<IAuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>(initialUser);

  const logOut = () => {
    setUser(initialUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("no such context! 😵");
  }
  return context;
};
