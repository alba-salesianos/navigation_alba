import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StackLogin from "./StackLogin";
import Homescreen from "../components/Homescreen";

export type RootStackParamList = {
  Home: undefined;
  StackLogin: undefined;
  ButtonGroup: undefined;
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackHomescreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="StackLogin" component={StackLogin} />
    </Stack.Navigator>
  );
};

export default StackHomescreen;
