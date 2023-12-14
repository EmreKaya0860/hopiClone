import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreenTopRoutes from "./HomeScreenTopRoutes";
import CategoriesScreen from "../screens/CategoriesScreen";
import QRScreen from "../screens/QRScreen";
import WalletScreen from "../screens/WalletScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const HomeScreenRoutes = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeScreenTopRoutes"
          component={HomeScreenTopRoutes}
        />
        <Tab.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Tab.Screen name="QRScreen" component={QRScreen} />
        <Tab.Screen name="WalletScreen" component={WalletScreen} />
        <Tab.Screen name="AccountScreen" component={AccountScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreenRoutes;

const styles = StyleSheet.create({});
