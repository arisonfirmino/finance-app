import { View, Text, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Feather } from "@expo/vector-icons";

export default function AddButtons() {
  return (
    <View className="mt-5 flex-row items-center justify-center">
      <LinearGradient
        colors={["#2fd78a", "#239e6f"]}
        className="mx-2 rounded-[30px]"
      >
        <TouchableOpacity className="flex h-28 w-40 items-center justify-center">
          <Feather name="download" size={30} color="white" />
          <Text className="text-xl text-white">add despesas</Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        colors={["#2fd78a", "#239e6f"]}
        className="mx-2 rounded-[30px]"
      >
        <TouchableOpacity className="flex h-28 w-40 items-center justify-center">
          <Feather name="upload" size={30} color="white" />
          <Text className="text-xl text-white">add ganhos</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
