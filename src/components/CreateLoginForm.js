import { Text, View, TouchableOpacity, TextInput } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function CreateLoginForm() {
  return (
    <View className="flex-1">
      <View className="flex-1">
        <View className="my-3">
          <Text className="text-text-color text-xl">Nome</Text>
          <TextInput
            placeholder="Digite seu nome"
            className="border-bg-color h-14 border-b border-solid text-xl"
          />
        </View>

        <View className="my-3">
          <Text className="text-text-color text-xl">Sobrenome</Text>
          <TextInput
            placeholder="Digite seu sobrenome"
            className="border-bg-color h-14 border-b border-solid text-xl"
          />
        </View>

        <View className="my-3">
          <Text className="text-text-color text-xl">Email</Text>
          <TextInput
            placeholder="Insira seu email"
            className="border-bg-color h-14 border-b border-solid text-xl"
          />
        </View>

        <View className="my-3">
          <Text className="text-text-color text-xl">Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            className="border-bg-color h-14 border-b border-solid text-xl"
          />
        </View>

        <View className="my-3">
          <Text className="text-text-color text-xl">Confirmação de senha</Text>
          <TextInput
            placeholder="Digite sua senha novamente"
            className="border-bg-color h-14 border-b border-solid text-xl"
          />
        </View>
      </View>

      <View className="flex items-center justify-center">
        <LinearGradient
          colors={["#2fd78a", "#239e6f"]}
          className="w-full rounded"
        >
          <TouchableOpacity className="flex items-center py-3">
            <Text className="text-xl text-white">Enviar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
