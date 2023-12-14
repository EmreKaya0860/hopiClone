import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreenTopRoutes from "./HomeScreenTopRoutes";
import CategoriesScreenTopRoutes from "./CategoriesScreenTopRoutes";
import QRScreen from "../screens/QRScreen";
import WalletScreen from "../screens/WalletScreen";
import AccountScreen from "../screens/AccountScreen";

import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();

const HomeScreenRoutes = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <Tab.Navigator
        options={{
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name={t("homeScreenBottomTab.home")}
          component={HomeScreenTopRoutes}
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
