import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import Homescreen from "../screens/StackHomescreen";
import Portfolio from "../screens/Portfolio";
import SecretScreen from "../screens/SecretScreen";
import { UserInfoContext } from "../contexts/UserInfoContext";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const { user } = React.useContext(UserInfoContext);

  const checkSecret = (): boolean => {
    if (user.username == "secreto" && user.password == "123") {
      return true;
    } else {
      return false;
    }
  };

  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: "Nombre Interesante",
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
      <Drawer.Screen name="Pantalla de inicio" component={Homescreen} />
      <Drawer.Screen name="Porfolio" component={Portfolio} />
      {checkSecret() && (
        <Drawer.Screen name="Secreto" component={SecretScreen} />
      )}
    </Drawer.Navigator>
  );
};

export default CustomDrawer;
