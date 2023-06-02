import { createContext } from "react";
import { IAuth, IData } from "../interface/authInterface";

export type AuthContextProps = {
  authState: IAuth;
  register: (params: IData) => void;
  login: (params: IData) => void;
  logout: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);
