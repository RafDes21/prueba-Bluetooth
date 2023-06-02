import { IAuth, IUser } from "../interface/authInterface";

type UserAction =
  | { type: "SET_USER"; payload: IUser }
  | { type: "RESET_STATE" };

export const authReducer = (state: IAuth, action: UserAction): IAuth => {
  switch (action.type) {
    case "SET_USER":
      const newUser: IUser = {
        name: action.payload.name,
        token: action.payload.token,
        loading: false,
      };
      return {
        ...state,
        user: [newUser],
      };

    case "RESET_STATE":
      return {
        ...state,
        user: [
          {
            name: "",
            token: "",
            loading: true,
          },
        ],
      };
    default:
      return state; // Devuelve el estado actual por defecto para cualquier otro caso
  }
};
