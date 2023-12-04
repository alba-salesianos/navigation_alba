import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import Homescreen from "../screens/StackHomescreen";
import Portfolio from "../screens/Portfolio";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: "Nombre Interesante",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "pink",
    },
    headerTintColor: "white",
    drawerItemStyle: {
      width: "93%",
    },
    drawerActiveTintColor: "white",
    drawerActiveBackgroundColor: "pink",
    drawerInactiveTintColor: "white",
    drawerInactiveBackgroundColor: "#d182a3",
    drawerType: "slide",
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen name="Homescreen" component={Homescreen} />
      <Drawer.Screen name="Porfolio" component={Portfolio} />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;
