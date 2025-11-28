import { Text, View } from "react-native";
import SwipePager from "@/components/SwipePager";

export default function Community() {
  return (
    <SwipePager>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Community</Text>
      </View>
    </SwipePager>
  );
}
