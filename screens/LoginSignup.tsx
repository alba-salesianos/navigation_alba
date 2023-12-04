import { View, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import Login from "../components/Buttons/Login";
import SignUp from "../components/Buttons/SignUp";
import ButtonGroups from "../components/Buttons/ButtonGroups";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./StackHomescreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UserInfoContext } from "../contexts/UserInfoContext";

export type LoginStackParamList = {
  ButtonGroups: undefined;
  Login: undefined;
  SignUp: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "LoginSignup">;

const LoginSignup: React.FC<Props> = (props) => {
  const { showPortfolio } = useContext(UserInfoContext);

  const Stack = createStackNavigator<LoginStackParamList>();

  useEffect(() => {
    if (showPortfolio) {
      props.navigation.push("Home");
    }
  }, []);
  //Mirar bien cómo hacer esto porque una vez iniciada sesión una vez, no te va a dejar crear otra cuenta

  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="ButtonGroups"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ButtonGroups" component={ButtonGroups} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </View>
  );
};

/* {
  login ? (
    <Login />
  ) : signUp ? (
    <SignUp setSignUp={setSignUp} />
  ) : (
    <ButtonGroups setSignUp={setSignUp} />
  );
} */

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "80%",
  },
});

export default LoginSignup;
