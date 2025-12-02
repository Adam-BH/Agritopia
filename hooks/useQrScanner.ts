import { useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";

export default function useQrScanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [status, setStatus] = useState<"scanning" | "success" | "fail">("scanning");
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (!permission?.granted) requestPermission();
  }, [permission, requestPermission]);

  const handleScan = (data: string) => {
    if (!enabled) return;
    setEnabled(false);
    console.log("qr.scan", { data });
    const ok = data?.trim().toLowerCase() === "adam";
    setStatus(ok ? "success" : "fail");
  };

  const reset = () => {
    setStatus("scanning");
    setEnabled(true);
  };

  return { permission, requestPermission, status, enabled, handleScan, reset };
}
