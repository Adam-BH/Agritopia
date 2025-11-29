import ExploreCard from "@/components/ui/ExploreCard";
import SegmentToggle from "@/components/ui/SegmentToggle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TextInput, View, useWindowDimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type Item = {
  id: string;
  title: string;
  kind: "plant" | "fish";
  imageUri?: string;
};

// Sample data - replace with your actual data source
const PLANTS_DATA: Item[] = [
  { id: "1", title: "Flowering Plants", kind: "plant" },
  { id: "2", title: "Succulents", kind: "plant" },
  { id: "3", title: "Herbs", kind: "plant" },
  { id: "4", title: "Vegetables", kind: "plant" },
];

const FISH_DATA: Item[] = [
  { id: "1", title: "Tropical Fish", kind: "fish" },
  { id: "2", title: "Goldfish", kind: "fish" },
  { id: "3", title: "Betta Fish", kind: "fish" },
  { id: "4", title: "Guppies", kind: "fish" },
];

export default function Community() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(0); // 0 = Plants, 1 = Fish
  const [searchQuery, setSearchQuery] = useState("");
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);

  const currentData = selectedCategory === 0 ? PLANTS_DATA : FISH_DATA;
  const filteredData = currentData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const onGestureEvent = (event: any) => {
    const dx = event.nativeEvent.translationX;
    translateX.value = dx;
  };

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      const dx = event.nativeEvent.translationX;
      const SWIPE_THRESHOLD = 50;

      if (dx <= -SWIPE_THRESHOLD && selectedCategory === 0) {
        // Swipe left -> switch to Fish
        setSelectedCategory(1);
        translateX.value = withSpring(0);
      } else if (dx >= SWIPE_THRESHOLD && selectedCategory === 1) {
        // Swipe right -> switch to Plants
        setSelectedCategory(0);
        translateX.value = withSpring(0);
      } else {
        translateX.value = withSpring(0);
      }
    }
  };

  const handleCardPress = (item: Item) => {
    if (item.kind === "plant") {
      router.push("/plant-details");
    } else {
      router.push("/fish-details");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* Header */}
        <View style={{ paddingTop: 20, paddingBottom: 16 }}>
          <Text style={{ color: "#1F4E20", fontSize: 32, fontWeight: "700", textAlign: "center" }}>
            Explore
          </Text>
        </View>

        {/* Segment Toggle */}
        <View style={{ marginBottom: 16 }}>
          <SegmentToggle
            options={["Plants", "Fish"]}
            value={selectedCategory}
            onChange={(index) => {
              setSelectedCategory(index);
              translateX.value = withSpring(0);
            }}
          />
        </View>

        {/* Search Bar */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 50,
            paddingHorizontal: 16,
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <MaterialCommunityIcons name="magnify" size={24} color="#666666" style={{ marginRight: 8 }} />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder={selectedCategory === 0 ? "Search plants & Flowers" : "Search fish"}
            placeholderTextColor="#999999"
            style={{ flex: 1, fontSize: 14, color: "#1F4E20" }}
          />
        </View>

        {/* Content Grid with Swipe */}
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
          activeOffsetX={[-10, 10]}
        >
          <Animated.View style={[{ flex: 1 }, animatedStyle]}>
            <FlatList
              data={filteredData}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ width: (width - 60) / 2 }}>
                  <ExploreCard
                    kind={item.kind}
                    title={item.title}
                    imageUri={item.imageUri}
                    onPress={() => handleCardPress(item)}
                  />
                </View>
              )}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </SafeAreaView>
  );
}
