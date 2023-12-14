import { NavigationContainer } from "@react-navigation/native";
import MainRouter from "./src/routes/MainRouter";
import "./i18n";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
