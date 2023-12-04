import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";

const SecretScreen = () => {
  return (
    <View>
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
  text: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
  },
  gif: {
    margin: 50,
    alignSelf: "center",
    borderRadius: 25,
    overlayColor: "#fce8e6",
    height: "43%",
    width: "80%",
  },
});
