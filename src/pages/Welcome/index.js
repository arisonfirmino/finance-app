import { Text, View, Image, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigate = useNavigation();

  return (
    <View className="bg-screen-color flex-1 px-5 py-14">
      <View className="items-center justify-center">
        <Image
          source={require("../../assets/logo.png")}
          className="h-[272px] w-[200px]"
        />
      </View>

      <View className="flex-1 justify-center">
        <Text className="text-text-color text-6xl">Gerencie</Text>
        <Text className="text-text-color text-6xl">Suas</Text>
        <Text className="text-text-color text-6xl">Finanças</Text>

        <Text className="text-text-color mt-2 w-64 text-lg opacity-75">
          Acompanhe todo dinheiro entrando e saindo de suas contas.
        </Text>
      </View>

      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={() => navigate.navigate("SignUp")}
          className="border-bg-color flex h-14 w-40 items-center justify-center rounded-[15px] border border-solid"
        >
          <Text className="text-text-color text-xl">Cadastrar</Text>
        </TouchableOpacity>

        <LinearGradient
          colors={["#2fd78a", "#239e6f"]}
          className="rounded-[15px]"
        >
          <TouchableOpacity
            onPress={() => navigate.navigate("SignIn")}
            className="flex h-14 w-40 items-center justify-center"
          >
            <Text className="text-xl text-white">Fazer Login</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
