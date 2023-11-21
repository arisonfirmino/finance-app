import { View } from "react-native";

import ProfileCard from "../../components/ProfileCard";
import Balance from "../../components/Balance";
import AddButtons from "../../components/AddButtons";

export default function Home() {
  return (
    <View className="flex-1 bg-screen-color px-5 pt-14">
      <ProfileCard />

      <Balance />

      <AddButtons />
    </View>
  );
}
