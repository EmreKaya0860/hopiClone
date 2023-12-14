import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreenTopRoutes from "./HomeScreenTopRoutes";
import CategoriesScreenTopRoutes from "./CategoriesScreenTopRoutes";
import QRScreen from "../screens/QRScreen";
import WalletScreen from "../screens/WalletScreen";
import AccountScreen from "../screens/AccountScreen";

import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();

const HomeScreenRoutes = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === t("homeScreenBottomTab.home")) {
              return focused ? (
                <FontAwesome name="home" size={24} color="black" />
              ) : (
                <FontAwesome name="home" size={24} color="gray" />
              );
            } else if (route.name === t("homeScreenBottomTab.categories")) {
              return focused ? (
                <AntDesign name="appstore1" size={24} color="black" />
              ) : (
                <AntDesign name="appstore1" size={24} color="gray" />
              );
            } else if (route.name === t("homeScreenBottomTab.QR")) {
              return focused ? (
                <FontAwesome name="qrcode" size={24} color="black" />
              ) : (
                <FontAwesome name="qrcode" size={24} color="gray" />
              );
            } else if (route.name === t("homeScreenBottomTab.wallet")) {
              return focused ? (
                <Ionicons name="wallet" size={24} color="black" />
              ) : (
                <Ionicons name="wallet" size={24} color="gray" />
              );
            } else {
              return focused ? (
                <FontAwesome name="user" size={24} color="black" />
              ) : (
                <FontAwesome name="user" size={24} color="gray" />
              );
            }
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name={t("homeScreenBottomTab.home")}
          component={HomeScreenTopRoutes}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={t("homeScreenBottomTab.categories")}
          component={CategoriesScreenTopRoutes}
        />
        <Tab.Screen name={t("homeScreenBottomTab.QR")} component={QRScreen} />
        <Tab.Screen
          name={t("homeScreenBottomTab.wallet")}
          component={WalletScreen}
        />
        <Tab.Screen
          name={t("homeScreenBottomTab.account")}
          component={AccountScreen}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreenRoutes;

const styles = StyleSheet.create({});
