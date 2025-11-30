import Button from "@/components/ui/Button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={[]}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section with Weather Background */}
        <View style={{ position: "relative", marginBottom: 20 }}>
          {/* Background Image */}
          <Image
            source={require("@/assets/storm.png")}
            style={{
              position: "absolute",
              top: -insets.top,
              left: 0,
              right: 0,
              height: 300 + insets.top,
              width: "100%",
              opacity: 0.8,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            resizeMode="cover"
          />

          {/* Location Section */}
          <View
            style={{
              paddingHorizontal: 24,
              paddingTop: 16 + insets.top,
              marginBottom: 16,
            }}
          >
            <Text style={{ color: "#B0B0B0", fontSize: 14, marginBottom: 2 }}>Your location</Text>
            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "600" }}>Gampaha, Sri Lanka</Text>
          </View>

          {/* Search Bar */}
          <View style={{ paddingHorizontal: 24, marginBottom: 40 }}>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 50,
                paddingHorizontal: 16,
                paddingVertical: 12,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Ionicons name="search" size={20} color="#828A89" />
              <Text style={{ flex: 1, color: "#828A89", fontSize: 16 }}>
                Search plants & Fish
              </Text>
            </View>
          </View>

          {/* Weather Card - Positioned on top of grey box */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 20,
              marginHorizontal: 24,
              marginTop: 0,
              marginBottom: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 10,
              // Shadow for iOS
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.15,
              shadowRadius: 8,
              // Elevation for Android
              elevation: 8,
            }}
          >
            <View>
              <Text style={{ fontSize: 48, fontWeight: "700", color: "#1F4E20" }}>23°C</Text>
              <Text style={{ fontSize: 14, color: "#828A89", marginTop: 4 }}>Gampaha, Sri Lanka</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              {/* Weather Icon Placeholder - Grey cloud with yellow lightning and blue raindrops */}
              <View
                style={{
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Text style={{ fontSize: 40 }}>⛈️</Text>
                {/* Overlay blue raindrops */}
                <View style={{ position: "absolute", bottom: 0, flexDirection: "row", gap: 4 }}>
                  <View style={{ width: 3, height: 6, borderRadius: 1.5, backgroundColor: "#2196F3" }} />
                  <View style={{ width: 3, height: 6, borderRadius: 1.5, backgroundColor: "#2196F3" }} />
                  <View style={{ width: 3, height: 6, borderRadius: 1.5, backgroundColor: "#2196F3" }} />
                </View>
              </View>
            </View>
          </View>
        </View>

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
              🌿 Hydroponic{"\n"}System Image
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#1F4E20", marginBottom: 8 }}>
              Check your System
            </Text>
            <Text style={{ fontSize: 14, color: "#828A89", marginBottom: 16, lineHeight: 20 }}>
              Take photos, start diagnose diseases & get plant care tips
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

            {/* Diagnose Card */}
            <View
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
            </View>

            {/* Recommendations Card */}
            <View
              style={{
                width: "48%",
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                padding: 16,
                position: "relative",
                minHeight: 140,
                marginTop: 0,
              }}
            >
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
            </View>

            {/* Reminders Card */}
            <View
              style={{
                width: "48%",
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                padding: 16,
                position: "relative",
                minHeight: 140,
                marginTop: 0,
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
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
