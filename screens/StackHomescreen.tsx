import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserInfoContext } from "../contexts/UserInfoContext";
import LoginSignup from "./LoginSignup";
import Home from "../components/Home";

export type RootStackParamList = {
  Home: undefined;
  LoginSignup: undefined;
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
