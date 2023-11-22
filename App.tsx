import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./components/CustomDrawer";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <CustomDrawer/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
