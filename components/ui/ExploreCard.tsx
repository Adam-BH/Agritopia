import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";

type Props = {
  kind: "plant" | "fish";
  title: string;
  imageUri?: string;
  imageSource?: ImageSourcePropType;
  onPress: () => void;
};

export default function ExploreCard({ kind, title, imageUri, imageSource, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 16,
      }}
    >
      <View
        style={{
          width: "100%",
          aspectRatio: 1,
          backgroundColor: "#E2E2E2",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageSource ? (
          <Image source={imageSource} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
        ) : imageUri ? (
          <Image source={{ uri: imageUri }} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
        ) : (
          <Text style={{ fontSize: 64 }}>{kind === "fish" ? "🐟" : "🌿"}</Text>
        )}
      </View>
      <View style={{ padding: 16 }}>
        <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600" }}>{title}</Text>
      </View>
    </Pressable>
  );
}

