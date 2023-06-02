import { useReducer, useEffect } from "react";
import { IAuth, IData, IUser } from "../interface/authInterface";
import { AuthContext } from "./authContext";
import { authReducer } from "./authReducer";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const initialState: IAuth = {
  user: [
    {
      name: "",
      token: "",
      loading: true,
    },
  ],
};

interface props {
  children: JSX.Element | JSX.Element[];
}

const AuthProvider = ({ children }: props) => {
  const register = async (params: IData) => {
    await createUserWithEmailAndPassword(auth, params.email, params.password);
  };

  const login = async (params: IData) => {
    await signInWithEmailAndPassword(auth, params.email, params.password);
  };

  const logout = async () => {
    await signOut(auth);
    dispatch({ type: "RESET_STATE" });
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        const updatedUser: IUser = {
          name: currentUser.email || "",
          token: token || "",
          loading: false,
        };
        dispatch({ type: "SET_USER", payload: updatedUser });
        console.log(currentUser);
      } else {
        dispatch({ type: "RESET_STATE" });
      }
    });
  }, []);

  const [authState, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ authState, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
