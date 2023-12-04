import React, { useState } from "react";
import {
  UserInfoTypeContext,
  UserInfoContext,
} from "../contexts/UserInfoContext";

type UserInfoProviderProps = {
  children: JSX.Element | JSX.Element[];
};

function UserInfoProvider(props: UserInfoProviderProps) {
  const { children } = props;

  const [login, setLogin] = useState(false);
  const [showPortfolio, setshowPortfolio] = useState(false);

  let userInfo = {
    username: "root",
    password: "123",
  };

  const [user, setUser] = useState(userInfo);
  const [userArray, setUserArray] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  const defaultValue: UserInfoTypeContext = {
    login,
    setLogin,
    showPortfolio,
    setshowPortfolio,
    user,
    setUser,
    currentUser,
    setCurrentUser,
    userArray,
    setUserArray,
  };

  return (
    <UserInfoContext.Provider value={defaultValue}>
      {children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoProvider;
