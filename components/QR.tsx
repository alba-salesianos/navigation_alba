import { StyleSheet, View, Text } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

const QR = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> GitHub </Text>
      <QRCode value="https://github.com/alba-salesianos/navigation_alba" />
    </View>
  );
};

export default QR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce8e6",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    margin: 20,
    fontSize: 30,
    fontWeight: "600",
  },
});
