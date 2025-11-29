import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Community() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#1F4E20", fontSize: 28, fontWeight: "700" }}>community</Text>
      </View>
    </SafeAreaView>
  );
}
