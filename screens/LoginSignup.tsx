import { View, StyleSheet } from "react-native";
import React from "react";
import Login from "../components/Buttons/Login";
import ButtonGroups from "../components/Buttons/ButtonGroups";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./StackHomescreen";
import Signup from "../components/Buttons/Signup";

const LoginSignup = () => {
  const Stack = createStackNavigator<RootStackParamList>();

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
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoginSignup;
