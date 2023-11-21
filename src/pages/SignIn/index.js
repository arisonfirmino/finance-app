import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigate = useNavigation();

  return (
    <View className="flex-1 bg-screen-color px-5 py-14">
      <View className="relative flex w-full items-center justify-center">
        <Text className="text-4xl font-medium text-text-color">Login</Text>

        <TouchableOpacity
          onPress={() => navigate.navigate("Welcome")}
          className="absolute left-0 top-0"
        >
          <Text className="text-base text-gray-500">Cancelar</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-10 w-full flex-1">
        <Text className="text-xl text-text-color">Email</Text>
        <TextInput
          placeholder="Digite seu email"
          className="h-14 border-b border-solid border-bg-color text-xl"
        />

        <Text className="mt-5 text-xl text-text-color">Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          className="h-14 border-b border-solid border-bg-color text-xl"
        />
      </View>

      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigate.navigate("SignUp")}>
          <Text className="text-base text-text-color">
            Ainda não tem uma conta?
          </Text>
        </TouchableOpacity>

        <LinearGradient
          colors={["#2fd78a", "#239e6f"]}
          className="rounded-full"
        >
          <TouchableOpacity
            onPress={() => navigate.navigate("Home")}
            className="flex items-center justify-center px-5 py-1"
          >
            <Text className="text-lg text-white">Avançar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
