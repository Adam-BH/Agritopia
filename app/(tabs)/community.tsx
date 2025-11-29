import ContentSwipePager from "@/components/ContentSwipePager";
import SwipePager from "@/components/SwipePager";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PlantCategory = {
  id: string;
  name: string;
  emoji: string;
};

const categories: PlantCategory[] = [
  { id: "1", name: "Flowering Plants", emoji: "🌸" },
  { id: "2", name: "Trees", emoji: "🌳" },
  { id: "3", name: "Shrubs & Herbs", emoji: "🌿" },
  { id: "4", name: "Weeds & Shrubs", emoji: "🌱" },
];

const fishCategories: PlantCategory[] = [
  { id: "1", name: "Freshwater Fish", emoji: "🐟" },
  { id: "2", name: "Saltwater Fish", emoji: "🐠" },
  { id: "3", name: "Tropical Fish", emoji: "🐡" },
  { id: "4", name: "Aquarium Fish", emoji: "🦈" },
];

export default function Community() {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleCategoryPress = () => {
    router.push("/plant-details");
  };

  const PlantsScreen = () => {
    const [plantsSearchText, setPlantsSearchText] = useState("");
    const { width } = useWindowDimensions();
    const cardWidth = (width - 88) / 2;

    return (
      <View style={{ flex: 1, backgroundColor: "#F4FAF4" }}>
        <ScrollView
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 20 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Search Bar */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 50,
              paddingHorizontal: 20,
              paddingVertical: 14,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <MaterialCommunityIcons name="magnify" size={24} color="#2C2C2C" style={{ marginRight: 12 }} />
            <TextInput
              value={plantsSearchText}
              onChangeText={setPlantsSearchText}
              placeholder="Search plants & Flowers"
              placeholderTextColor="#999999"
              style={{ flex: 1, fontSize: 16, color: "#1A2530" }}
            />
          </View>

          {/* Categories Grid */}
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {categories.map((category, index) => (
              <Pressable
                key={category.id}
                onPress={handleCategoryPress}
                style={{
                  width: cardWidth,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  overflow: "hidden",
                  marginBottom: 16,
                  marginRight: index % 2 === 0 ? 16 : 0,
                  aspectRatio: 1,
                }}
              >
                {/* Image/Emoji Area */}
                <View
                  style={{
                    width: "100%",
                    height: "70%",
                    backgroundColor: "#E8F5E9",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 64 }}>{category.emoji}</Text>
                </View>
                {/* Text Area */}
                <View
                  style={{
                    height: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 12,
                  }}
                >
                  <Text
                    style={{
                      color: "#1F4E20",
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "center",
                      flexWrap: "wrap",
                    }}
                    numberOfLines={2}
                  >
                    {category.name}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };

  const FishScreen = () => {
    const [fishSearchText, setFishSearchText] = useState("");
    const { width } = useWindowDimensions();
    const cardWidth = (width - 88) / 2;

    return (
      <View style={{ flex: 1, backgroundColor: "#F4FAF4" }}>
        <ScrollView
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 20 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Search Bar */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 50,
              paddingHorizontal: 20,
              paddingVertical: 14,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <MaterialCommunityIcons name="magnify" size={24} color="#2C2C2C" style={{ marginRight: 12 }} />
            <TextInput
              value={fishSearchText}
              onChangeText={setFishSearchText}
              placeholder="Search fish"
              placeholderTextColor="#999999"
              style={{ flex: 1, fontSize: 16, color: "#1A2530" }}
            />
          </View>

          {/* Categories Grid */}
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {fishCategories.map((category, index) => (
              <Pressable
                key={category.id}
                onPress={handleCategoryPress}
                style={{
                  width: cardWidth,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  overflow: "hidden",
                  marginBottom: 16,
                  marginRight: index % 2 === 0 ? 16 : 0,
                  aspectRatio: 1,
                }}
              >
                {/* Image/Emoji Area */}
                <View
                  style={{
                    width: "100%",
                    height: "70%",
                    backgroundColor: "#E8F5E9",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 64 }}>{category.emoji}</Text>
                </View>
                {/* Text Area */}
                <View
                  style={{
                    height: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 12,
                  }}
                >
                  <Text
                    style={{
                      color: "#1F4E20",
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "center",
                      flexWrap: "wrap",
                    }}
                    numberOfLines={2}
                  >
                    {category.name}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <SwipePager>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
        <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 24 }}>
          {/* Title */}
          <Text style={{ color: "#1F4E20", fontSize: 28, fontWeight: "700", textAlign: "center", marginBottom: 24 }}>
            Explore
          </Text>

          {/* Content Swipe Pager */}
          <ContentSwipePager
            currentIndex={activeTabIndex}
            onIndexChange={setActiveTabIndex}
            labels={["Plants", "Fish"]}
            icons={["tree", "fish"]}
          >
            <PlantsScreen />
            <FishScreen />
          </ContentSwipePager>
        </View>
      </SafeAreaView>
    </SwipePager>
  );
}
