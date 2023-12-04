import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import Homescreen from "../screens/StackHomescreen";
import Portfolio from "../screens/Portfolio";
import SecretScreen from "../screens/SecretScreen";
import { UserInfoContext } from "../contexts/UserInfoContext";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const { user } = useContext(UserInfoContext);

  const checkSecret = (): boolean => {
    if (user.username == "secreto") {
      return true;
    } else {
      return false;
    }
  };

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
      {checkSecret() && (
        <Drawer.Screen name="SecretScreen" component={SecretScreen} />
      )}
    </Drawer.Navigator>
  );
};

export default CustomDrawer;
