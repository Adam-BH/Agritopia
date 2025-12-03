import HeaderWithBack from "@/components/shared/HeaderWithBack";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useChatbot from "@/hooks/useChatbot";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Keyboard, Platform } from "react-native";
import { useEffect, useRef, useState } from "react";

export default function Chatbot() {
  const { messages, input, setInput, sending, canSend, sendPrompt } = useChatbot();
  const insets = useSafeAreaInsets();
  const [kbHeight, setKbHeight] = useState(0);
  const [inputH, setInputH] = useState(0);
  const scrollRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    const showEvt = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvt = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
    const showSub = Keyboard.addListener(showEvt, (e) => { setKbHeight(e.endCoordinates.height); scrollRef.current?.scrollToEnd({ animated: true }); });
    const hideSub = Keyboard.addListener(hideEvt, () => setKbHeight(0));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
      <HeaderWithBack title="Chatbot" />
      <View style={{ flex: 1 }}>
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 0, paddingBottom: insets.bottom + 20 + kbHeight + inputH + 20 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map((m) => (
            <View
              key={m.id}
              style={{
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                backgroundColor: m.role === "user" ? "#1F4E20" : "#FFFFFF",
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 16,
                marginBottom: 12,
                maxWidth: "80%",
              }}
            >
              <Text style={{ color: m.role === "user" ? "#FFFFFF" : "#1A2530", fontSize: 16 }}>{m.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: insets.bottom + 20 + kbHeight,
            paddingHorizontal: 24,
          }}
          onLayout={(e) => setInputH(e.nativeEvent.layout.height)}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View style={{ flex: 1 }}>
              <Input value={input} onChangeText={setInput} placeholder="Type your message" autoCapitalize="sentences" />
            </View>
            <Button title={sending ? "Sending" : "Send"} onPress={sendPrompt} disabled={!canSend} variant="primary" compact />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
