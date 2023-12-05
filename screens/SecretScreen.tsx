import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";

const SecretScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Aquí está tu premio!</Text>
      <Image
        style={styles.gif}
        source={require("../assets/images/rick-astley-never-gonna-give-you-up.gif")}
      />
    </View>
  );
};

export default SecretScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce8e6",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    margin: 50,
    padding: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 30,
  },
  gif: {
    margin: 20,
    alignSelf: "center",
    borderRadius: 50,
    overlayColor: "#fce8e6",
    height: "43%",
    width: "80%",
    borderWidth: 1,
    borderColor: "grey",
  },
});
