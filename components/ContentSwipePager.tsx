import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Pressable, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

type ContentSwipePagerProps = {
  children: React.ReactNode[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  labels?: string[];
  icons?: (keyof typeof MaterialCommunityIcons.glyphMap)[];
};

export default function ContentSwipePager({ children, currentIndex, onIndexChange, labels = [], icons = [] }: ContentSwipePagerProps) {
  const { width } = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView>(null);
  const translateX = useSharedValue(-currentIndex * width);
  const isScrolling = useRef(false);
  
  // Convert children to array if needed
  const childrenArray = React.Children.toArray(children);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const onGestureEvent = (event: any) => {
    if (isScrolling.current) return;
    const dx = event.nativeEvent.translationX;
    translateX.value = -currentIndex * width + dx;
  };

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      const dx = event.nativeEvent.translationX;
      const SWIPE_THRESHOLD = 70;

      if (dx <= -SWIPE_THRESHOLD && currentIndex < childrenArray.length - 1) {
        // swipe left -> next
        const nextIndex = currentIndex + 1;
        translateX.value = withSpring(-nextIndex * width, { damping: 20, stiffness: 200 });
        onIndexChange(nextIndex);
        scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
      } else if (dx >= SWIPE_THRESHOLD && currentIndex > 0) {
        // swipe right -> previous
        const prevIndex = currentIndex - 1;
        translateX.value = withSpring(-prevIndex * width, { damping: 20, stiffness: 200 });
        onIndexChange(prevIndex);
        scrollViewRef.current?.scrollTo({ x: prevIndex * width, animated: true });
      } else {
        translateX.value = withSpring(-currentIndex * width, { damping: 20, stiffness: 200 });
      }
    }
  };

  React.useEffect(() => {
    translateX.value = -currentIndex * width;
    scrollViewRef.current?.scrollTo({ x: currentIndex * width, animated: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, width]);

  return (
    <View style={{ flex: 1 }}>
      {/* Segment Toggle Style Control */}
      {labels.length > 0 && (
        <View
          style={{
            height: 50,
            borderRadius: 15,
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          {labels.map((label, index) => {
            const isActive = currentIndex === index;
            return (
              <Pressable
                key={index}
                onPress={() => onIndexChange(index)}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isActive ? "#1F4E20" : "transparent",
                  borderRadius: 12,
                  margin: 6,
                  flexDirection: "row",
                }}
              >
                {icons[index] && (
                  <MaterialCommunityIcons
                    name={icons[index]}
                    size={18}
                    color={isActive ? "#FFFFFF" : "#003300"}
                    style={{ marginRight: 6 }}
                  />
                )}
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: isActive ? "#FFFFFF" : "#003300",
                  }}
                >
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
      
      <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange} activeOffsetX={[-10, 10]}>
        <Animated.View style={[{ flex: 1, overflow: "hidden" }, animatedStyle]}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            onScrollBeginDrag={() => {
              isScrolling.current = true;
            }}
            onScrollEndDrag={() => {
              isScrolling.current = false;
            }}
            style={{ flex: 1 }}
            contentContainerStyle={{ width: width * childrenArray.length, height: "100%" }}
          >
            {childrenArray.map((child, index) => (
              <View key={index} style={{ width, height: "100%" }}>
                <View style={{ width: "100%", height: "100%", paddingHorizontal: 12 }}>
                  {child}
                </View>
              </View>
            ))}
          </ScrollView>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

