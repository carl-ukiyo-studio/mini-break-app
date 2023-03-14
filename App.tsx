import { StatusBar, View } from "react-native";
import Navigation from "./src/navigation/navigation";

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <Navigation></Navigation>
    </View>
  );
}
