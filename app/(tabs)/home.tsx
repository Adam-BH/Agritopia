import { Text, View } from "react-native";
import SwipePager from "@/components/SwipePager";

export default function Home() {
  return (
    <SwipePager>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home</Text>
      </View>
    </SwipePager>
  );
}
