import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import StackHomescreen from "../screens/StackHomescreen";
import SecretScreen from "./SecretScreen";
import { UserInfoContext } from "../contexts/UserInfoContext";
import TabPortfolio from "../screens/TabPortfolio";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const { user, showPortfolio } = React.useContext(UserInfoContext);

  const checkSecret = (): boolean => {
    if (user.username == "secreto" && user.password == "123") {
      return true;
    } else {
      return false;
    }
  };

  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: "App de Alba",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#FFB6C1",
    },
    headerTintColor: "white",
    drawerItemStyle: {
      width: "93%",
    },
    drawerActiveTintColor: "white",
    drawerActiveBackgroundColor: "#FFB6C1",
    drawerInactiveTintColor: "white",
    drawerInactiveBackgroundColor: "#d182a3",
    drawerType: "slide",
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen name="Pantalla de inicio" component={StackHomescreen} />
      {showPortfolio && (
        <Drawer.Screen name="Portfolio" component={TabPortfolio} />
      )}
      {checkSecret() && (
        <Drawer.Screen name="Secreto" component={SecretScreen} />
      )}
    </Drawer.Navigator>
  );
};

export default CustomDrawer;
