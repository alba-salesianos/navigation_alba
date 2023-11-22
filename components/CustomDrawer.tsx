import { StyleSheet } from "react-native";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import Homescreen from "../screens/Homescreen";
import Portfolio from "../screens/Portfolio";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: "Nombre interesante",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "pink",
    },
    headerTintColor: "white",
    drawerItemStyle: {
      width: "100%",
    },
    drawerActiveTintColor: "white",
    drawerActiveBackgroundColor: "lilac",
    drawerInactiveTintColor: "black",
    drawerInactiveBackgroundColor: "pink",
    drawerType: "slide",
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen name="Home" component={Homescreen} />
      <Drawer.Screen name="Porfolio" component={Portfolio} />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
