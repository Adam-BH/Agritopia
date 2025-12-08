import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import WeatherHeader from "@/components/weather/WeatherHeader";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={[]}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <WeatherHeader />

        {/* Plant Categories Scroll */}
        {/* <View style={{ marginBottom: 24 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
          >
            <Pressable
              style={{
                backgroundColor: "#1F4E20",
                borderRadius: 50,
                paddingHorizontal: 20,
                paddingVertical: 12,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: "#FFFFFF",
                }}
              />
              <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: "600" }}>Letuce</Text>
            </Pressable>

            {["Tomato", "Basil", "Mint", "Cilantro"].map((category, index) => (
              <Pressable
                key={index}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: "#E8F5E9",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20 }}>🌱</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View> */}

        {/* Check your System Card */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 20,
            marginHorizontal: 24,
            marginBottom: 24,
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* Hydroponic System Image Placeholder */}
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 16,
              backgroundColor: "#E8F5E9",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12, color: "#828A89", textAlign: "center" }}>
              Estimate your{"\n"}System Health
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#1F4E20", marginBottom: 8 }}>
              Check your System
            </Text>
            <Text style={{ fontSize: 14, color: "#828A89", marginBottom: 16, lineHeight: 20 }}>
              Call for maintenance to check your system
            </Text>
            <Button title="Diagnose" variant="primary" compact />
          </View>
        </View>

        {/* All Features Section */}
        <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#1F4E20", marginBottom: 16 }}>
            All Features
          </Text>

          {/* Feature Grid */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {/* IOT control Card */}
            <Pressable
              onPress={() => router.push("/iot-control")}
              style={{
                width: "48%",
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                padding: 16,
                position: "relative",
                minHeight: 140,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "700", color: "#1F4E20", marginBottom: 4 }}>
                IOT control
              </Text>
              <Text style={{ fontSize: 12, color: "#828A89", marginBottom: 12 }}>
                Control your system from home
              </Text>
              <View
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: 12,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={require("@/assets/icons/IOTcontrol.png")}
                  style={{ width: 75, height: 75 }}
                  resizeMode="contain"
                />
              </View>
            </Pressable>

            {/* Chatbot / Help Card */}
            <Pressable
              onPress={() => router.push("/chatbot")}
              style={{
                width: "48%",
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                padding: 16,
                position: "relative",
                minHeight: 140,
                display: "none"
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "700", color: "#1F4E20", marginBottom: 4 }}>
                Chatbot
              </Text>
              <Text style={{ fontSize: 12, color: "#828A89", marginBottom: 12 }}>
                Ask for help and tips
              </Text>
              <View
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 12,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={require("@/assets/icons/chatbot.png")}
                  style={{ width: 90, height: 90 }}
                  resizeMode="cover"
                />
              </View>
            </Pressable>

            {/* Diagnose Card */}
            <Card style={{ width: "48%", position: "relative", minHeight: 140 }}>
              <Text style={{ fontSize: 16, fontWeight: "700", color: "#1F4E20", marginBottom: 4 }}>
                Diagnose
              </Text>
              <Text style={{ fontSize: 12, color: "#828A89", marginBottom: 12 }}>
                Check your system&apos;s health
              </Text>
              <View
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 12,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={require("@/assets/icons/diagnose.png")}
                  style={{ width: 90, height: 90 }}
                  resizeMode="cover"
                />
              </View>
            </Card>

            {/* Recommendations Card */}
            <Card style={{ width: "48%", position: "relative", minHeight: 140}}>
              <Text style={{ fontSize: 14, fontWeight: "700", color: "#1F4E20", marginBottom: 4 }}>
                Recommendations
              </Text>
              <Text style={{ fontSize: 12, color: "#828A89", marginBottom: 12 }}>
                Get tips regarding your questions
              </Text>
              <View
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 12,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  overflow: "hidden",
                  
                }}
              >
                <Image
                  source={require("@/assets/icons/recommendation.png")}
                  style={{ width: 90, height: 90 }}
                  resizeMode="cover"
                />
              </View>
            </Card>

            {/* Reminders Card */}
            <Pressable
              onPress={() => router.push({ pathname: "/(tabs)/my-garden", params: { tab: "schedule" } })}
              style={{
                width: "48%",
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                padding: 16,
                position: "relative",
                minHeight: 140,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "700", color: "#1F4E20", marginBottom: 4 }}>
                Reminders
              </Text>
              <Text style={{ fontSize: 12, color: "#828A89", marginBottom: 12 }}>
                Stay on top of your system care
              </Text>
              <View
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 12,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={require("@/assets/icons/reminder.png")}
                  style={{ width: 90, height: 90 }}
                  resizeMode="cover"
                />
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
