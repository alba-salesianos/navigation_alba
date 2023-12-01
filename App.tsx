import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./components/CustomDrawer";
import UserInfoProvider from "./providers/UserInfoProvider";

export default function App() {
  return (
    <UserInfoProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <CustomDrawer/>
        </NavigationContainer>
      </View>
    </UserInfoProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
