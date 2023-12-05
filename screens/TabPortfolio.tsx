import React from "react";
import Portfolio from "../components/Portfolio/Portfolio";
import QR from "../components/Portfolio/QR";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabPortfolio = () => {
  return (
    <Tab.Navigator
      initialRouteName="PortfolioScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="PortfolioScreen"
        component={Portfolio}
        options={{
          tabBarLabel: "Portfolio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="QR"
        component={QR}
        options={{
          tabBarLabel: "QR",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="qr-code-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabPortfolio;
