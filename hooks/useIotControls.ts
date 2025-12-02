export default function useIotControls() {
  const onIncrease = (control: string) => {
    console.log("iot.increase", { control });
  };
  const onDecrease = (control: string) => {
    console.log("iot.decrease", { control });
  };
  const togglePower = (control: string) => {
    console.log("iot.togglePower", { control });
  };
  return { onIncrease, onDecrease, togglePower };
}
