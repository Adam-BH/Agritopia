import ExploreCard from "@/components/ui/ExploreCard";
import SegmentToggle from "@/components/ui/SegmentToggle";
import { FISH_TYPES, PLANT_TYPES } from "@/data/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, Text, TextInput, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Item = { id: string; title: string; kind: "plant" | "fish"; imageUri?: string };
const PLANTS_DATA: Item[] = PLANT_TYPES.map((p) => ({ id: p.id, title: p.name, kind: "plant", imageUri: p.imageUri }));
const FISH_DATA: Item[] = FISH_TYPES.map((f) => ({ id: f.id, title: f.name, kind: "fish", imageUri: f.imageUri }));

export default function Catalogue() {
  const router = useRouter();
  const { focus } = useLocalSearchParams<{ focus?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(0); // 0 = Plants, 1 = Fish
  const [searchQuery, setSearchQuery] = useState("");
  const { width } = useWindowDimensions();
  const searchRef = useRef<TextInput>(null);

  useEffect(() => {
    if (focus && searchRef.current) {
      const t = setTimeout(() => searchRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [focus]);

  const currentData = selectedCategory === 0 ? PLANTS_DATA : FISH_DATA;
  const filteredData = currentData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardPress = (item: Item) => {
    if (item.kind === "plant") {
      router.push({ pathname: "/plant-details", params: { id: item.id } });
    } else {
      router.push({ pathname: "/fish-details", params: { id: item.id } });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View style={{ paddingTop: 20, paddingBottom: 16 }}>
          <Text style={{ color: "#1F4E20", fontSize: 28, fontWeight: "700", textAlign: "center" }}>
            Catalogue
          </Text>
        </View>

        <View style={{ marginBottom: 16 }}>
          <SegmentToggle
            options={["Plants", "Fish"]}
            value={selectedCategory}
            onChange={(index) => {
              setSelectedCategory(index);
            }}
          />
        </View>

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
            ref={searchRef}
            autoFocus={Boolean(focus)}
          />
        </View>

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
      </View>
    </SafeAreaView>
  );
}
