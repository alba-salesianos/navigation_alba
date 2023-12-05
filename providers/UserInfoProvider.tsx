import React from "react";
import {
  UserInfoTypeContext,
  UserInfoContext,
} from "../contexts/UserInfoContext";

type UserInfoProviderProps = {
  children: JSX.Element | JSX.Element[];
};

function UserInfoProvider(props: UserInfoProviderProps) {
  const { children } = props;

  const [showPortfolio, setshowPortfolio] = React.useState(false);

  let userInfo = {
    username: "root",
    password: "123",
  };

  const [user, setUser] = React.useState(userInfo);
  const [userArray, setUserArray] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState("");

  const defaultValue: UserInfoTypeContext = {
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
