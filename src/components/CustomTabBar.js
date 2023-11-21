import { View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View className=" mb-14 items-center justify-center px-5">
      <View className="w-full flex-row items-center justify-center rounded-[30px] bg-[#b1b1b1] px-5 py-[10px]">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTesteID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <View className="px-4">
                <View
                  className="flex h-[80px] w-[90px] items-center justify-center rounded-[30px]"
                  style={{
                    backgroundColor: isFocused ? "#2fd78a" : "transparent",
                  }}
                >
                  <Ionicons
                    name={options.tabBarIcon}
                    size={30}
                    color={isFocused ? "#304c5a" : "#e1e1e1"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
