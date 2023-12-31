import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}
