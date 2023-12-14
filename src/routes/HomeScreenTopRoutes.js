import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HopiScreen from "../screens/HopiScreen";
import HopiShopScreen from "../screens/HopiShopScreen";

const Tab = createMaterialTopTabNavigator();

const HomeScreenTopRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HopiScreen" component={HopiScreen} />
      <Tab.Screen name="HopiShopScreen" component={HopiShopScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreenTopRoutes;

const styles = StyleSheet.create({});
