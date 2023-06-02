export interface IUser {
  name: string;
  token: string;
  loading: boolean;
}

export interface IAuth {
  user: IUser[];

}

export interface IData {
  email: string;
  password: string;
}
