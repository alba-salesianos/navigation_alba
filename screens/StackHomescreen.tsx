import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginSignup from "./LoginSignup";
import Home from "../components/Home";

export type RootStackParamList = {
  Home: undefined;
  LoginSignup: undefined;
  ButtonGroups: undefined;
  Login: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Homescreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginSignup" component={LoginSignup} />
    </Stack.Navigator>
  );
};

export default Homescreen;
