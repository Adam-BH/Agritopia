import ControlCard from "@/components/iot/ControlCard";
import QualityLevelCard from "@/components/iot/QualityLevelCard";
import HeaderWithBack from "@/components/shared/HeaderWithBack";
import useIotControls from "@/hooks/useIotControls";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IOTControl() {
  const { onIncrease, onDecrease, togglePower } = useIotControls();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
      <HeaderWithBack title="IOT Control" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 0, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >

        {/* Description */}
        {/* <Text style={{ color: "#828A89", fontSize: 16, textAlign: "center", marginBottom: 32, lineHeight: 24 }}>
          Control your hydroponic system remotely from anywhere. Monitor and adjust settings in real-time.
        </Text> */}

        {/* IOT Device Card */}
        {/* <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 24,
            marginBottom: 24,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 16,
              backgroundColor: "#E8F5E9",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Image
              source={require("@/assets/icons/IOTcontrol.png")}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#1F4E20", marginBottom: 8 }}>
            System Status
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#E8F5E9",
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              marginTop: 8,
            }}
          >
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: "#4CAF50",
                marginRight: 8,
              }}
            />
            <Text style={{ color: "#1F4E20", fontSize: 14, fontWeight: "600" }}>Connected</Text>
          </View>
        </View> */}

        {/* Control Options */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: "#1F4E20", fontSize: 20, fontWeight: "700", marginBottom: 16 }}>
            Quick Controls
          </Text>

          <ControlCard icon="thermometer-outline" title="Temperature" value="23°C" onDecrease={() => onDecrease("temperature")} onIncrease={() => onIncrease("temperature")} />
          <ControlCard icon="water-outline" title="Water Level" value="75%" onDecrease={() => onDecrease("water")} onIncrease={() => onIncrease("water")} />
          <ControlCard icon="sunny-outline" title="Light" value="ON" showDecrease={false} showIncrease={false} showPower={true} marginBottom={0} onTogglePower={() => togglePower("light")} />
        </View>

        {/* Water Quality Levels */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: "#1F4E20", fontSize: 20, fontWeight: "700", marginBottom: 16 }}>
            Water Quality Levels
          </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            <QualityLevelCard value={0.0} color="#4ECDC4" label="Nitrates level" />
            <QualityLevelCard value={0.0} color="#26A69A" label="PH Level" />
            <QualityLevelCard value={0.0} color="#1F4E20" label="Amoniac level" />
            <QualityLevelCard value={0.0} color="#66BB6A" label="Nitrites level" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

