import { Text, View, Image, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <View className="flex-1 bg-screen-color px-5 pt-14">
      <View className="bg-card-light w-full flex-row items-center justify-between rounded-[30px] p-[10px]">
        <View className="flex-row items-center">
          <Image
            source={require("../../assets/picture.png")}
            className="h-[80px] w-[80px] rounded-full"
          />

          <Text className="ml-3 text-2xl text-text-color">Arison Firmino</Text>
        </View>

        <TouchableOpacity className="mr-2">
          <Ionicons name="ios-settings-outline" size={30} color="#304c5a" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
