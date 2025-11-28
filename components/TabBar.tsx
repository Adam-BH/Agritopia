import React from "react";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: insets.bottom,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#E6E6E6",
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const Icon = options.tabBarIcon as (props: {
          focused: boolean;
          color: string;
          size: number;
        }) => React.ReactNode;

        const item = (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={{ alignItems: "center", paddingVertical: 8, paddingHorizontal: 16, minWidth: 48 }}
          >
            {Icon ? (
              Icon({ focused: isFocused, color: isFocused ? "#1F4E20" : "#003300", size: 24 })
            ) : (
              <MaterialCommunityIcons
                name="circle-outline"
                size={24}
                color={isFocused ? "#1F4E20" : "#003300"}
              />
            )}
            {isFocused ? (
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "#1F4E20",
                  marginTop: 6,
                }}
              />
            ) : (
              <View style={{ height: 14 }} />
            )}
          </TouchableOpacity>
        );

        if (index === 1) {
          return [
            item,
            <View key="spacer-mid" style={{ width: 72 }} />,
          ];
        }
        return item;
      })}
    </View>
  );
}
