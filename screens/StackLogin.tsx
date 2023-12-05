import { View, StyleSheet } from "react-native";
import React from "react";
import Login from "../components/Buttons/Login";
import Signup from "../components/Buttons/Signup";
import ButtonGroup from "../components/Buttons/ButtonGroup";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./StackHomescreen";

const StackLogin = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="ButtonGroup"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ButtonGroup" component={ButtonGroup} />
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

export default StackLogin;
