import SwipePager from "@/components/SwipePager";
import { Text, View } from "react-native";

export default function Search() {
  return (
    <SwipePager>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Search</Text>
      </View>
    </SwipePager>
  );
}
