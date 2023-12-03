import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserInfoContext } from "../contexts/UserInfoContext";
import LoginSignup from "./LoginSignup";
import Home from "../components/Home";

export type RootStackParamList = {
  Home: undefined;
  Identificarse: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Homescreen = () => {
  const { user, setUserArray } = useContext(UserInfoContext);

  useEffect(() => {
    if (user.username != "" && user.password != "") {
      setUserArray((userArray: object[]) => [...userArray, user]);
    }
  }, [user]);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Identificarse" component={LoginSignup} />
    </Stack.Navigator>
  );
};

export default Homescreen;
