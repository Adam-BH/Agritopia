import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

function formatMessage(fmt: unknown, rest: unknown[]) {
  if (typeof fmt !== "string") return [fmt, ...rest];
  let i = 0;
  const msg = fmt.replace(/%[sdifoOc]/g, () => {
    const v = rest[i++];
    try {
      if (typeof v === "object" && v !== null) return JSON.stringify(v);
      return String(v);
    } catch {
      return String(v);
    }
  });
  const extra = rest.slice(i);
  return [msg, ...extra];
}

console.error = (...args: unknown[]) => {
  const [fmt, ...rest] = args;
  originalConsoleError(...formatMessage(fmt, rest));
};

console.warn = (...args: unknown[]) => {
  const [fmt, ...rest] = args;
  originalConsoleWarn(...formatMessage(fmt, rest));
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack />
    </GestureHandlerRootView>
  );
}
