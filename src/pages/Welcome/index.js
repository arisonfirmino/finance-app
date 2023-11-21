import { Text, View, Image, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigate = useNavigation();

  return (
    <View className="flex-1 bg-screen-color px-5 py-14">
      <View className="items-center justify-center">
        <Image
          source={require("../../assets/logo.png")}
          className="h-[272px] w-[200px]"
        />
      </View>

      <View className="flex-1 justify-center">
        <Text className="text-6xl text-text-color">Gerencie</Text>
        <Text className="text-6xl text-text-color">Suas</Text>
        <Text className="text-6xl text-text-color">Finanças</Text>

        <Text className="mt-2 w-64 text-lg text-text-color opacity-75">
          Acompanhe todo dinheiro entrando e saindo de suas contas.
        </Text>
      </View>

      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={() => navigate.navigate("SignUp")}
          className="flex h-14 w-40 items-center justify-center rounded-[15px] border border-solid border-bg-color"
        >
          <Text className="text-xl text-text-color">Cadastrar</Text>
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
