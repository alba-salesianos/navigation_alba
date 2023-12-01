import { createContext } from "react";

export type UserInfoTypeContext = {
  showPortfolio: boolean;
  setshowPortfolio: Function;
  login: boolean;
  setLogin: Function;
  user: { username: string; password: string };
  setUser: Function;
  currentUser: string;
  setCurrentUser: Function;
  userArray: { username: string; password: string }[];
  setUserArray: Function;
};

export const UserInfoContext = createContext({} as UserInfoTypeContext);
