import QrButton from "@/components/QrButton";
import TabBar from "@/components/TabBar";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        tabBar={(props) => <TabBar {...props} />}
        >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarAccessibilityLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="my-garden"
          options={{
            title: "My Garden",
            tabBarAccessibilityLabel: "My Garden",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="leaf-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="catalogue"
          options={{
            title: "Catalogue",
            tabBarAccessibilityLabel: "Catalogue",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarAccessibilityLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
      <QrButton />
    </View>
  );
}
