import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useRef } from "react";
import { useWindowDimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

const ROUTE_ORDER = ["home", "community", "search", "settings"] as const;

export default function SwipePager({ children }: { children: React.ReactNode }) {
  const nav = useNavigation();
  const route = useRoute();
  const translateXRef = useRef(0);
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const onGestureEvent = (event: any) => {
    const dx = event.nativeEvent.translationX;
    translateXRef.current = dx;
    translateX.value = dx;
  };

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      const dx = translateXRef.current;
      translateXRef.current = 0;

      const name = String(route.name);
      const idx = ROUTE_ORDER.indexOf(name as (typeof ROUTE_ORDER)[number]);
      if (idx === -1) return;

      const SWIPE_THRESHOLD = 70;
      if (dx <= -SWIPE_THRESHOLD && idx < ROUTE_ORDER.length - 1) {
        // swipe left -> next tab
        const next = ROUTE_ORDER[idx + 1];
        translateX.value = withTiming(-width, { duration: 200 }, () => {
          translateX.value = 0;
        });
        // @ts-ignore
        nav.navigate(next as never);
      } else if (dx >= SWIPE_THRESHOLD && idx > 0) {
        // swipe right -> previous tab
        const prev = ROUTE_ORDER[idx - 1];
        translateX.value = withTiming(width, { duration: 200 }, () => {
          translateX.value = 0;
        });
        // @ts-ignore
        nav.navigate(prev as never);
      } else {
        translateX.value = withSpring(0, { damping: 20, stiffness: 200 });
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
      activeOffsetX={[-10, 10]}
    >
      <Animated.View style={[{ flex: 1 }, animatedStyle]}>{children}</Animated.View>
    </PanGestureHandler>
  );
}
