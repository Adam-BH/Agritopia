import React, { useEffect, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AddActionItem from "./AddActionItem";
import Button from "./ui/Button";

type Action = {
  label: string;
  icon: string;
  onPress?: () => void;
};

type Props = {
  visible: boolean;
  onClose?: () => void;
  actions?: Action[];
  mode?: "actions" | "confirm";
  title?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export default function AddActionScaffold({ visible, onClose, actions = [], mode = "actions", title, message, confirmLabel = "Delete", cancelLabel = "Cancel", onConfirm, onCancel }: Props) {
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(300);
  const overlayOpacity = useSharedValue(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      translateY.value = withTiming(0, { duration: 220 });
      overlayOpacity.value = withTiming(1, { duration: 220 });
    } else {
      translateY.value = withTiming(300, { duration: 200 });
      overlayOpacity.value = withTiming(0, { duration: 200 });
      const t = setTimeout(() => setMounted(false), 220);
      return () => clearTimeout(t);
    }
  }, [visible]);

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: overlayOpacity.value,
  }));

  if (!mounted) return null;

  return (
    <Modal visible transparent animationType="none" statusBarTranslucent>
      <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}>
      <Animated.View
        style={[
          {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 51, 0, 0.4)",
          },
          overlayStyle,
        ]}
      />

      <Pressable
        onPress={onClose}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />

       <Animated.View
         style={[
           {
             position: "absolute",
             left: 0,
             right: 0,
             bottom: 0,
             backgroundColor: "#FFFFFF",
             borderTopLeftRadius: 20,
             borderTopRightRadius: 20,
             paddingHorizontal: 24,
             paddingTop: 16,
             paddingBottom: insets.bottom + 16,
             shadowColor: "#000",
             shadowOpacity: 0.15,
             shadowRadius: 12,
             shadowOffset: { width: 0, height: -4 },
             elevation: 12,
           },
           sheetStyle,
         ]}
       >
        {mode === "actions" ? (
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {actions.map((a) => (
              <AddActionItem key={a.label} label={a.label} icon={a.icon} onPress={a.onPress} />
            ))}
          </View>
        ) : (
          <View style={{ gap: 16 }}>
            {title ? <Text style={{ fontSize: 18, fontWeight: "700", color: "#ef4444", textAlign: "center" }}>{title}</Text> : null}
            {message ? <Text style={{ fontSize: 14, color: "#6B7280" }}>{message}</Text> : null}
            <View style={{ flexDirection: "row", gap: 12 }}>
              <View style={{ flex: 1 }}>
                <Button title={cancelLabel} variant="outline" textWeight="400" compact onPress={() => { onCancel && onCancel(); onClose && onClose(); }} />
              </View>
              <View style={{ flex: 1 }}>
                <Button title={confirmLabel} textWeight="400" compact onPress={() => { onConfirm && onConfirm(); onClose && onClose(); }} />
              </View>
            </View>
          </View>
        )}
       </Animated.View>
      </View>
    </Modal>
  );
}
