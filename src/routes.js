import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Statistics from "./pages/Statistics";

import CustomTabBar from "./components/CustomTabBar";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,

        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: "ios-home-outline",
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: "ios-wallet-outline",
        }}
      />

      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: "bar-chart-outline",
        }}
      />
    </Tab.Navigator>
  );
}
