import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import CreateLoginForm from "../../components/CreateLoginForm";

export default function SignUp() {
  const navigate = useNavigation();

  return (
    <View className="flex-1 bg-screen-color px-5 py-14">
      <View className="relative flex w-full items-center justify-center">
        <Text className="text-4xl font-medium text-text-color">Cadastrar</Text>

        <TouchableOpacity
          onPress={() => navigate.navigate("Welcome")}
          className="absolute left-0 top-0"
        >
          <Text className="text-base text-gray-500">Cancelar</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-5 flex-1">
        <CreateLoginForm />
      </View>
    </View>
  );
}
