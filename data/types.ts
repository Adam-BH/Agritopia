export type Condition = {
  iconName: string;
  iconColor: string;
  iconBackgroundColor: string;
  label: string;
  value: string;
};

import { ImageSourcePropType } from "react-native";

export type PlantType = {
  id: string;
  kind: "plant";
  name: string;
  description: string;
  imageUri?: string;
  imageSource?: ImageSourcePropType;
  conditions: Condition[];
};

export type FishType = {
  id: string;
  kind: "fish";
  name: string;
  description: string;
  imageUri?: string;
  imageSource?: ImageSourcePropType;
  conditions: Condition[];
};

export const PLANT_TYPES: PlantType[] = [
  {
    id: "plant_lettuce",
    kind: "plant",
    name: "Lettuce",
    description:
      "Lettuce grows quickly in aquaponics; prefers cool temperatures and moderate light.",
    imageSource: require("@/assets/plantfish/output_images/lettuce.png"),
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "220 ml" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Moderate" },
      { iconName: "waveform", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "O2%", value: "8.2%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "55%" },
    ],
  },
  {
    id: "plant_basil",
    kind: "plant",
    name: "Basil",
    description:
      "Basil thrives in warm conditions with plenty of light; aromatic and fast-growing herb.",
    imageSource: require("@/assets/plantfish/output_images/basil.png"),
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "240 ml" },
      { iconName: "weather-sunny", iconColor: "#F9A825", iconBackgroundColor: "#FFE082", label: "Sunlight", value: "High" },
      { iconName: "waveform", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "O2%", value: "8.4%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "58%" },
    ],
  },
  {
    id: "plant_spinach",
    kind: "plant",
    name: "Spinach",
    description:
      "Spinach is nutrient-rich and cold-tolerant; ideal for aquaponic systems with steady water flow.",
    imageSource: require("@/assets/plantfish/output_images/spinach.png"),
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "230 ml" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Moderate" },
      { iconName: "waveform", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "O2%", value: "8.3%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "56%" },
    ],
  },
  {
    id: "plant_mint",
    kind: "plant",
    name: "Mint",
    description:
      "Mint is vigorous and aromatic; grows well in moist conditions with partial shade.",
    imageSource: require("@/assets/plantfish/output_images/mint.png"),
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "260 ml" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Partial" },
      { iconName: "waveform", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "O2%", value: "8.1%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "62%" },
    ],
  },
  {
    id: "plant_cilantro",
    kind: "plant",
    name: "Cilantro",
    description:
      "Cilantro adds fresh flavor to dishes; prefers cooler temperatures and moderate light.",
    imageSource: require("@/assets/plantfish/output_images/cilantro.png"),
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "210 ml" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Moderate" },
      { iconName: "waveform", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "O2%", value: "8.0%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "54%" },
    ],
  },
  {
    id: "plant_parsley",
    kind: "plant",
    name: "Parsley",
    description:
      "Parsley is versatile and nutrient-dense; grows well with consistent moisture and light.",
    imageSource: require("@/assets/plantfish/output_images/parsley.png"),
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "225 ml" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Moderate" },
      { iconName: "waveform", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "O2%", value: "8.2%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "57%" },
    ],
  },
  {
    id: "plant_green_onions",
    kind: "plant",
    name: "Green Onions",
    description:
      "Green onions are fast-growing and easy to maintain; thrive in aquaponic environments.",
    imageSource: require("@/assets/plantfish/output_images/green_onions.png"),
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "200 ml" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Moderate" },
      { iconName: "waveform", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "O2%", value: "7.9%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "53%" },
    ],
  },
];

export const FISH_TYPES: FishType[] = [
  {
    id: "fish_tilapia",
    kind: "fish",
    name: "Tilapia",
    description:
      "Tilapia is hardy and adaptable; maintain clean water and consistent oxygenation.",
    imageSource: require("@/assets/plantfish/output_images/tilapia.png"),
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "Stable" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Low" },
      { iconName: "waveform", iconColor: "#1565C0", iconBackgroundColor: "#BBDEFB", label: "O2%", value: "6.5%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "Aquatic" },
    ],
  },
  {
    id: "fish_shrimp",
    kind: "fish",
    name: "Shrimp",
    description:
      "Shrimp are excellent algae eaters and nutrient cyclers; require stable water parameters.",
    imageSource: require("@/assets/plantfish/output_images/crevette.png"),
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "Clean" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Low" },
      { iconName: "waveform", iconColor: "#1565C0", iconBackgroundColor: "#BBDEFB", label: "O2%", value: "7.0%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "Aquatic" },
    ],
  },
];

export function getTypeById(id: string) {
  const plant = PLANT_TYPES.find((p) => p.id === id);
  if (plant) return plant;
  const fish = FISH_TYPES.find((f) => f.id === id);
  return fish;
}
