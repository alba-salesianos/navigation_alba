import { View } from "react-native";
import React, { useContext } from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";
import Login from "../components/Buttons/Login";
import SignUp from "../components/Buttons/SignUp";
import ButtonGroups from "../components/Buttons/ButtonGroups";

interface signUpProps {
  signUp: boolean;
  setSignUp: (param: boolean) => void;
}
const LoginSignup = (props: signUpProps) => {
  const { setSignUp, signUp } = props;
  const { login } = useContext(UserInfoContext);

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
