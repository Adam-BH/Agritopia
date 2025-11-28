import { Text, View } from "react-native";
import SwipePager from "@/components/SwipePager";

export default function Settings() {
  return (
    <SwipePager>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings</Text>
      </View>
    </SwipePager>
  );
}
