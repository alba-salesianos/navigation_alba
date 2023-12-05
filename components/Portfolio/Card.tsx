import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  hobby: string;
}

function Card(props: Props) {
  const { hobby } = props;

  return (
    <View style={styles.card}>
      <Text>{hobby}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "white",
    margin: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
});
export default Card;
