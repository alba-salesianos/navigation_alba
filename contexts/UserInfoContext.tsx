import { createContext } from "react";

export type UserInfoTypeContext = {
  showPortfolio: boolean;
  setshowPortfolio: Function;
  user: { name: string; email?: string; password: string };
  setUser: Function;
  currentUser: string;
  setCurrentUser: Function;
  userArray: { name: string; email?: string; password: string }[];
  setUserArray: Function;
};

export const UserInfoContext = createContext({} as UserInfoTypeContext);
