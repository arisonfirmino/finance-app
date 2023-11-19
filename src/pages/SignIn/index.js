import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigate = useNavigation();

  return (
    <View className="bg-screen-color flex-1 px-5 py-14">
      <View className="relative flex w-full items-center justify-center">
        <Text className="text-text-color text-4xl font-medium">Login</Text>

        <TouchableOpacity
          onPress={() => navigate.navigate("Welcome")}
          className="absolute left-0 top-0"
        >
          <Text className="text-base text-gray-500">Cancelar</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-10 w-full flex-1">
        <Text className="text-text-color text-xl">Email</Text>
        <TextInput
          placeholder="Digite seu email"
          className="border-bg-color h-14 border-b border-solid text-xl"
        />

        <Text className="text-text-color mt-5 text-xl">Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          className="border-bg-color h-14 border-b border-solid text-xl"
        />
      </View>

      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigate.navigate("SignUp")}>
          <Text className="text-text-color text-base">
            Ainda não tem uma conta?
          </Text>
        </TouchableOpacity>

        <LinearGradient
          colors={["#2fd78a", "#239e6f"]}
          className="rounded-full"
        >
          <TouchableOpacity className="flex items-center justify-center px-5 py-1">
            <Text className="text-lg text-white">Avançar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
