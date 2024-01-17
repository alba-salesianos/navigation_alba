import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const RecorderScreen = () => {
  const [isRecording, setIsRecording] = React.useState(false);

  const handleRecord = (): boolean => {
    setIsRecording(!isRecording);
    return isRecording;
  };
  return (
    <View>
      <Pressable style={styles.button} onPress={() => handleRecord()}>
        <Text style={styles.buttonText}>
          {isRecording ? "Grabando..." : "Grabar"}
        </Text>
      </Pressable>
    </View>
  );
};

export default RecorderScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "royalblue",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
