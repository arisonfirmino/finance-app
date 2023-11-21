import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RecentActivity() {
  return (
    <View className="mt-5">
      <View className="flex-row items-center justify-between">
        <Text className="text-xl text-text-color">Atividades recentes</Text>

        <TouchableOpacity>
          <Text className="text-base text-text-color">Ver tudo</Text>
        </TouchableOpacity>
      </View>

      <View className="relative mt-4 flex-row items-center rounded-[15px] bg-card-light p-2">
        <View className="flex h-[60px] w-[60px] items-center justify-center rounded-[15px] bg-[#999898]">
          <Ionicons name="fast-food-outline" size={30} color="#304c5a" />
        </View>

        <View className="ml-2">
          <Text className="text-xl text-text-color">Ifood</Text>
          <Text className="text-sm text-gray-500">23 min ago</Text>
        </View>

        <Text className="absolute right-0 mr-3 text-[#D8210B]">- 245,59</Text>
      </View>

      <View className="relative mt-4 flex-row items-center rounded-[15px] bg-card-light p-2">
        <View className="flex h-[60px] w-[60px] items-center justify-center rounded-[15px] bg-[#999898]">
          <MaterialCommunityIcons name="cash-plus" size={30} color="#304c5a" />
        </View>

        <View className="ml-2">
          <Text className="text-xl text-text-color">Pix</Text>
          <Text className="text-sm text-gray-500">3 hours ago</Text>
        </View>

        <Text className="absolute right-0 mr-3 text-[#22ff00]">457,50</Text>
      </View>
    </View>
  );
}
