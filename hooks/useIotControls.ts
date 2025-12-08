import { useState } from 'react';

export default function useIotControls() {
  const [isFishFeedOn, setIsFishFeedOn] = useState(false);
  const [isO2PumpOn, setIsO2PumpOn] = useState(true);
  
  const togglePower = (control: string) => {
    console.log("iot.togglePower", { control });
    if (control === "fishFeed") {
      setIsFishFeedOn(!isFishFeedOn);
    } else if (control === "o2Pump") {
      setIsO2PumpOn(!isO2PumpOn);
    }
  };
  return { togglePower, isFishFeedOn, isO2PumpOn };
}
