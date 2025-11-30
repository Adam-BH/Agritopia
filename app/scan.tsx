import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Scan() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [status, setStatus] = useState<"scanning" | "success" | "fail">("scanning");
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (!permission?.granted) requestPermission();
  }, [permission, requestPermission]);

  const onScan = ({ data }: { data: string }) => {
    if (!enabled) return;
    setEnabled(false);
    const ok = data?.trim().toLowerCase() === "adam"; // TODO: scan validation
    setStatus(ok ? "success" : "fail");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F4FAF4" }}>
      <BackButton />

      {status === "scanning" ? (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          {permission && !permission.granted ? (
            <View style={{ alignItems: "center", gap: 16 }}>
              <Text style={{ color: "#003300", fontSize: 18 }}>Camera permission is required</Text>
              <Button title="Allow Camera" onPress={() => requestPermission()} compact />
            </View>
          ) : (
            <View style={{ alignItems: "center", gap: 24 }}>
              <View style={{ width: 211, height: 211, borderRadius: 16, overflow: "hidden", backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center" }}>
                {permission?.granted ? (
                  <CameraView
                    style={{ width: 211, height: 211 }}
                    onBarcodeScanned={(codes) => {
                      const first = Array.isArray(codes) ? codes[0] : codes;
                      if (first?.data) onScan({ data: String(first.data) });
                    }}
                    barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
                    zoom={0.1}
                  />
                ) : (
                  <MaterialCommunityIcons name="qrcode-scan" size={96} color="#1F4E20" />
                )}
              </View>
              <Text style={{ color: "#707B81", fontSize: 14 }}>Align the QR code within the frame</Text>
            </View>
          )}
        </View>
      ) : (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{ width: 211, height: 211, borderRadius: 16, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center" }}>
            <MaterialCommunityIcons name={status === "success" ? "check-circle" : "alert-circle"} size={96} color={status === "success" ? "#22c55e" : "#ef4444"} />
          </View>
          <View style={{ marginTop: 46, width: 335, alignItems: "center", gap: 14 }}>
            <Text style={{ fontSize: 24, color: "#003300", fontWeight: "700", textAlign: "center", width: "100%" }}>{status === "success" ? "QR Verified !" : "QR Not Found !"}</Text>
            <Text style={{ fontSize: 14, color: "#707B81", textAlign: "center", width: "100%" }}>{status === "success" ? "Verification successful. You can go back home." : "We cannot identify your QR code please try to scan again"}</Text>
            <Button
              title={status === "success" ? "Go Back Home" : "Try Again"}
              onPress={() => {
                if (status === "success") {
                  router.back();
                } else {
                  setStatus("scanning");
                  setEnabled(true);
                }
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}
