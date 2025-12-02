import SearchBar from "@/components/ui/SearchBar";
import useSearchNavigation from "@/hooks/useSearchNavigation";
import * as Location from "expo-location";
import { useEffect, useMemo, useState } from "react";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type LocationState = {
  city: string;
  country: string;
  lat: number | null;
  lon: number | null;
};

type WeatherState = {
  temperature: number | null;
  code: number | null;
  condition: string;
};

function mapWeatherCode(code: number | null): string {
  if (code === null) return "unknown";
  if (code === 0) return "clear";
  if ([1, 2, 3].includes(code)) return "cloudy";
  if ([45, 48].includes(code)) return "fog";
  if ([51, 53, 55].includes(code)) return "drizzle";
  if ([61, 63, 65, 80, 81, 82, 66, 67].includes(code)) return "rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ([95, 96, 99].includes(code)) return "thunderstorm";
  return "unknown";
}

function emojiForCondition(condition: string): string {
  switch (condition) {
    case "clear":
      return "☀️";
    case "cloudy":
      return "☁️";
    case "fog":
      return "🌫️";
    case "drizzle":
    case "rain":
      return "🌧️";
    case "snow":
      return "❄️";
    case "thunderstorm":
      return "⛈️";
    default:
      return "🌤️";
  }
}

function bgForCondition(condition: string) {
  if (condition === "clear") return require("@/assets/weather/clear.png");
  if (condition === "cloudy") return require("@/assets/weather/cloudy.png");
  if (condition === "fog") return require("@/assets/weather/fog.png");
  if (condition === "drizzle") return require("@/assets/weather/drizzle.png");
  if (condition === "rain") return require("@/assets/weather/rain.png");
  if (condition === "snow") return require("@/assets/weather/snow.png");
  if (condition === "thunderstorm") return require("@/assets/weather/thunderstorm.png");
  return require("@/assets/weather/clear.png");
}

export default function WeatherHeader() {
  const insets = useSafeAreaInsets();
  const { openCatalogueSearch } = useSearchNavigation();
  const [location, setLocation] = useState<LocationState>({ city: "", country: "", lat: null, lon: null });
  const [weather, setWeather] = useState<WeatherState>({ temperature: null, code: null, condition: "unknown" });

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const perm = await Location.requestForegroundPermissionsAsync();
        if (perm.status !== "granted") return;
        const pos = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        if (!cancelled) setLocation((s) => ({ ...s, lat, lon }));
        try {
          const places = await Location.reverseGeocodeAsync({ latitude: lat, longitude: lon });
          const p = places?.[0];
          const city = String(p?.city || p?.district || "");
          const country = String(p?.country || "");
          if (!cancelled) setLocation({ city, country, lat, lon });
        } catch {}
        const wRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const wJson = await wRes.json();
        const cw = wJson?.current_weather;
        const temp = typeof cw?.temperature === "number" ? cw.temperature : null;
        const code = typeof cw?.weathercode === "number" ? cw.weathercode : null;
        const condition = mapWeatherCode(code);
        if (!cancelled) setWeather({ temperature: temp, code, condition });
      } catch {}
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const bgSource = useMemo(() => bgForCondition(weather.condition), [weather.condition]);
  const locationLabel = useMemo(() => {
    if (location.city && location.country) return `${location.city}, ${location.country}`;
    return "Your location";
  }, [location.city, location.country]);

  return (
    <View style={{ position: "relative", marginBottom: 20 }}>
      <Image
        source={bgSource}
        style={{ position: "absolute", top: -insets.top, left: 0, right: 0, height: 300 + insets.top, width: "100%", opacity: 0.8, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        resizeMode="cover"
      />

      <View style={{ paddingHorizontal: 24, paddingTop: 16 + insets.top, marginBottom: 16 }}>
        <Text style={{ color: "#B0B0B0", fontSize: 14, marginBottom: 2 }}>Your location</Text>
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "600" }}>{locationLabel}</Text>
      </View>

      <View style={{ paddingHorizontal: 24, marginBottom: 40 }}>
        <SearchBar placeholder="Search plants & Fish" onPress={() => openCatalogueSearch()} />
      </View>

      <View style={{ backgroundColor: "#FFFFFF", borderRadius: 20, paddingVertical: 16, paddingHorizontal: 32, marginHorizontal: 24, marginTop: 0, marginBottom: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", zIndex: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8, elevation: 8 }}>
        <View>
          <Text style={{ fontSize: 48, fontWeight: "700", color: "#1F4E20" }}>{weather.temperature !== null ? `${Math.round(weather.temperature)}°C` : "—°C"}</Text>
          <Text style={{ fontSize: 14, color: "#828A89", marginTop: 4 }}>{locationLabel}</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: 80, height: 80, justifyContent: "center", alignItems: "center", position: "relative" }}>
            <Text style={{ fontSize: 60 }}>{emojiForCondition(weather.condition)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
