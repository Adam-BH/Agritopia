import Button from "@/components/ui/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FishDetails() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      {/* Header */}
      <View style={{ backgroundColor: "#2C2C2C", paddingHorizontal: 16, paddingVertical: 12, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Pressable
          onPress={() => router.back()}
          style={{
            position: "absolute",
            left: 16,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#FFFFFF" />
        </Pressable>
        <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "600" }}>Fish Details</Text>
      </View>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Image Section */}
        <View style={{ position: "relative", width: "100%", height: 200, backgroundColor: "#E2E2E2" }}>
          {/* Placeholder Image */}
          <View style={{ width: "100%", height: "100%", backgroundColor: "#D0D0D0", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 48 }}>🐟</Text>
            <Text style={{ marginTop: 8, color: "#666", fontSize: 14 }}>Fish Image</Text>
          </View>

          {/* Carousel Dots
          <View style={{ position: "absolute", top: 16, left: 0, right: 0, alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 6 }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#FFFFFF" }} />
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#FFFFFF", opacity: 0.5 }} />
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#FFFFFF", opacity: 0.5 }} />
            </View>
          </View> */}
        </View>

        {/* Content Card */}
        <View style={{ backgroundColor: "#E8F5E9", borderTopLeftRadius: 24, borderTopRightRadius: 24, marginTop: -24, paddingTop: 24, paddingHorizontal: 20, paddingBottom: 32 }}>
          {/* Fish Name */}
          <Text style={{ color: "#1F4E20", fontSize: 22, fontWeight: "700", marginBottom: 16 }}>
            Fish Species Name
          </Text>

          {/* Description Section */}
          <View style={{ marginBottom: 24 }}>
            <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600", marginBottom: 8 }}>Description</Text>
            <Text style={{ color: "#666666", fontSize: 14, lineHeight: 20 }}>
              This fish species is known for its vibrant colors and peaceful nature, making it an excellent addition to aquariums and aquatic environments.
            </Text>
          </View>

          {/* Favored Conditions Section */}
          <View style={{ marginBottom: 32 }}>
            <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600", marginBottom: 16 }}>Favored Conditions</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
              {/* Water */}
              <View style={{ width: "47%", backgroundColor: "#FFFFFF", borderRadius: 12, padding: 16 }}>
                <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: "#B2DFDB", justifyContent: "center", alignItems: "center", marginBottom: 8 }}>
                  <MaterialCommunityIcons name="water" size={24} color="#00695C" />
                </View>
                <Text style={{ color: "#1F4E20", fontSize: 14, fontWeight: "600", marginBottom: 4 }}>Water</Text>
                <Text style={{ color: "#666666", fontSize: 12 }}>250 ml</Text>
              </View>

              {/* Sunlight */}
              <View style={{ width: "47%", backgroundColor: "#FFFFFF", borderRadius: 12, padding: 16 }}>
                <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: "#C8E6C9", justifyContent: "center", alignItems: "center", marginBottom: 8 }}>
                  <MaterialCommunityIcons name="weather-sunny" size={24} color="#2E7D32" />
                </View>
                <Text style={{ color: "#1F4E20", fontSize: 14, fontWeight: "600", marginBottom: 4 }}>Sunlight</Text>
                <Text style={{ color: "#666666", fontSize: 12 }}>Normal</Text>
              </View>

              {/* O2% */}
              <View style={{ width: "47%", backgroundColor: "#FFFFFF", borderRadius: 12, padding: 16 }}>
                <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: "#C8E6C9", justifyContent: "center", alignItems: "center", marginBottom: 8 }}>
                  <MaterialCommunityIcons name="waveform" size={24} color="#2E7D32" />
                </View>
                <Text style={{ color: "#1F4E20", fontSize: 14, fontWeight: "600", marginBottom: 4 }}>O2%</Text>
                <Text style={{ color: "#666666", fontSize: 12 }}>8.3%</Text>
              </View>

              {/* Humidity */}
              <View style={{ width: "47%", backgroundColor: "#FFFFFF", borderRadius: 12, padding: 16 }}>
                <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: "#C8E6C9", justifyContent: "center", alignItems: "center", marginBottom: 8 }}>
                  <MaterialCommunityIcons name="water-percent" size={24} color="#2E7D32" />
                </View>
                <Text style={{ color: "#1F4E20", fontSize: 14, fontWeight: "600", marginBottom: 4 }}>Humidity</Text>
                <Text style={{ color: "#666666", fontSize: 12 }}>54%</Text>
              </View>
            </View>
          </View>

          {/* Add to My Fish Button */}
          <Button title="Add to My Fish" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

