import { Text, View, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

export default function Balance() {
  return (
    <View className="bg-card-light relative mt-10 rounded-[30px] p-5">
      <Text className="text-xl text-text-color opacity-75">Saldo</Text>

      <Text className="text-2xl text-text-color">R$ 7.648,53</Text>

      <TouchableOpacity className="absolute right-0 m-5">
        <Feather name="edit" size={20} color="#304c5a" />
      </TouchableOpacity>
    </View>
  );
}
