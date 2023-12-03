import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";
import Login from "../components/Buttons/Login";
import SignUp from "../components/Buttons/SignUp";
import ButtonGroups from "../components/Buttons/ButtonGroups";

const LoginSignup = () => {
  const [signUp, setSignUp] = useState(false);
  const { login, setLogin } = useContext(UserInfoContext);

  useEffect(() => {
    if (login) {
      setLogin(!login);
    }
  }, []);

  return (
    <View>
      {login ? (
        <Login />
      ) : signUp ? (
        <SignUp setSignUp={setSignUp} />
      ) : (
        <ButtonGroups setSignUp={setSignUp} />
      )}
    </View>
  );
};

export default LoginSignup;
