import BackButton from "@/components/ui/BackButton";
import { Text, View } from "react-native";

type Props = {
  title: string;
};

export default function HeaderWithBack({ title }: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 24,
      }}
    >
      <View style={{ width: 44 }}>
        <BackButton style={{ position: "relative", top: 0, left: 0 }} />
      </View>
      <Text
        style={{
          flex: 1,
          color: "#1F4E20",
          fontSize: 28,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      <View style={{ width: 44 }} />
    </View>
  );
}
