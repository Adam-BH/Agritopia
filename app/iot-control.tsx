import ControlCard from "@/components/iot/ControlCard";
import QualityLevelCard from "@/components/iot/QualityLevelCard";
import HeaderWithBack from "@/components/shared/HeaderWithBack";
import useIotControls from "@/hooks/useIotControls";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IOTControl() {
  const { togglePower, isFishFeedOn, isO2PumpOn } = useIotControls();
  
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
          <Text style={{ color: "#1F4E20", fontSize: 20, fontWeight: "700", marginBottom: 12 }}>
            Quick Controls
          </Text>

          <View style={{ gap: 12 }}>
            <ControlCard icon="sunny-outline" title="Manual Fish Feed" value={isFishFeedOn ? "ON" : "OFF"} showDecrease={false} showIncrease={false} showPower={true} marginBottom={0} onTogglePower={() => togglePower("fishFeed")} />
            <ControlCard icon="sunny-outline" title="O2 Pump" value={isO2PumpOn ? "ON" : "OFF"} showDecrease={false} showIncrease={false} showPower={true} marginBottom={0} onTogglePower={() => togglePower("o2Pump")} />
          </View>
        </View>

        {/* Water Quality Levels */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: "#1F4E20", fontSize: 20, fontWeight: "700", marginBottom: 16 }}>
            Water Quality Levels
          </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            <QualityLevelCard value={6.7} max={14} unit="pH" color="#26A69A" label="PH Level" />
            <QualityLevelCard value={3} max={100} unit="mg/L" color="#4ECDC4" label="Nitrates level" />
            <QualityLevelCard value={12} max={50} unit="mg/L" color="#1F4E20" label="Amoniac level" />
            <QualityLevelCard value={15} max={50} unit="mg/L" color="#66BB6A" label="Nitrites level" />
            <QualityLevelCard value={1.8} max={10} unit="mS/cm" color="#FF7043" label="EC Level" />
            <QualityLevelCard value={7.2} max={14} unit="mg/L" color="#42A5F5" label="O2 Level" />
            <QualityLevelCard value={23} max={40} unit="°C" color="#FFA726" label="Temperature" />
          </View>
        </View>
        {/* Air Quality Levels */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: "#1F4E20", fontSize: 20, fontWeight: "700", marginBottom: 16 }}>
            Air Quality Levels
          </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            <QualityLevelCard value={19} max={50} unit="°C" color="#4ECDC4" label="Temperature" />
            <QualityLevelCard value={67} max={100} unit="%" color="#26A69A" label="Humidity" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

