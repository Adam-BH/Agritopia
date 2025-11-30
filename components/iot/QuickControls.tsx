import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function QuickControls() {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ color: "#1F4E20", fontSize: 20, fontWeight: "700", marginBottom: 16 }}>
        Quick Controls
      </Text>

      {/* Temperature Control */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          padding: 20,
          marginBottom: 12,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="thermometer-outline" size={24} color="#1F4E20" style={{ marginRight: 12 }} />
            <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600" }}>Temperature</Text>
          </View>
          <Text style={{ color: "#1F4E20", fontSize: 18, fontWeight: "700" }}>23°C</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
          >
            <Ionicons name="remove-circle-outline" size={24} color="#1F4E20" />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
          >
            <Ionicons name="add-circle-outline" size={24} color="#1F4E20" />
          </View>
        </View>
      </View>

      {/* Water Level Control */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          padding: 20,
          marginBottom: 12,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="water-outline" size={24} color="#1F4E20" style={{ marginRight: 12 }} />
            <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600" }}>Water Level</Text>
          </View>
          <Text style={{ color: "#1F4E20", fontSize: 18, fontWeight: "700" }}>75%</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
          >
            <Ionicons name="remove-circle-outline" size={24} color="#1F4E20" />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
          >
            <Ionicons name="add-circle-outline" size={24} color="#1F4E20" />
          </View>
        </View>
      </View>

      {/* Light Control */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="sunny-outline" size={24} color="#1F4E20" style={{ marginRight: 12 }} />
            <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600" }}>Light</Text>
          </View>
          <Text style={{ color: "#1F4E20", fontSize: 18, fontWeight: "700" }}>ON</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
          >
            <Ionicons name="power-outline" size={24} color="#1F4E20" />
          </View>
        </View>
      </View>
    </View>
  );
}

