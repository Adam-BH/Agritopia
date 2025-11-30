export type Condition = {
  iconName: string;
  iconColor: string;
  iconBackgroundColor: string;
  label: string;
  value: string;
};

export type PlantType = {
  id: string;
  kind: "plant";
  name: string;
  description: string;
  imageUri?: string;
  conditions: Condition[];
};

export type FishType = {
  id: string;
  kind: "fish";
  name: string;
  description: string;
  imageUri?: string;
  conditions: Condition[];
};

export const PLANT_TYPES: PlantType[] = [
  {
    id: "plant_tomato",
    kind: "plant",
    name: "Tomato",
    description:
      "Tomato adds color and flavor; grows well with moderate sunlight and consistent watering.",
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "250 ml" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Normal" },
      { iconName: "waveform", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "O2%", value: "8.3%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "54%" },
    ],
  },
  {
    id: "plant_sunflower",
    kind: "plant",
    name: "Sunflower",
    description:
      "Sunflower thrives in direct sunlight; keep soil evenly moist for strong growth.",
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "200 ml" },
      { iconName: "weather-sunny", iconColor: "#F9A825", iconBackgroundColor: "#FFE082", label: "Sunlight", value: "High" },
      { iconName: "waveform", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "O2%", value: "8.0%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "50%" },
    ],
  },
  {
    id: "plant_anthurium",
    kind: "plant",
    name: "Anthurium",
    description:
      "Anthurium prefers bright, indirect light and high humidity; avoid over-watering.",
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "180 ml" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Indirect" },
      { iconName: "waveform", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "O2%", value: "8.1%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "60%" },
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
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "Stable" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Low" },
      { iconName: "waveform", iconColor: "#1565C0", iconBackgroundColor: "#BBDEFB", label: "O2%", value: "6.5%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "Aquatic" },
    ],
  },
  {
    id: "fish_catfish",
    kind: "fish",
    name: "Catfish",
    description:
      "Catfish tolerates varied conditions; ensure adequate bottom habitat and filtration.",
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "Stable" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Low" },
      { iconName: "waveform", iconColor: "#1565C0", iconBackgroundColor: "#BBDEFB", label: "O2%", value: "6.8%" },
      { iconName: "water-percent", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Humidity", value: "Aquatic" },
    ],
  },
  {
    id: "fish_salmon",
    kind: "fish",
    name: "Salmon",
    description:
      "Salmon requires cool, oxygen-rich water; maintain flow and cleanliness.",
    conditions: [
      { iconName: "water", iconColor: "#00695C", iconBackgroundColor: "#B2DFDB", label: "Water", value: "Cool" },
      { iconName: "weather-sunny", iconColor: "#2E7D32", iconBackgroundColor: "#C8E6C9", label: "Sunlight", value: "Low" },
      { iconName: "waveform", iconColor: "#1565C0", iconBackgroundColor: "#BBDEFB", label: "O2%", value: "7.2%" },
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
