import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  hobby: string;
}

function Card(props: Props) {
  const { hobby } = props;

  return (
    <View style={styles.cardLight}>
      <Text style={styles.fontLight}>{hobby}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cardLight: {
    borderRadius: 10,
    padding: 20,

    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "white",
    margin: 10,
  },
  fontLight: {
    color: "black",
  },
  fontDark: {
    color: "black",
  },
  cardDark: {
    borderRadius: 10,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "white",
    margin: 10,
  },
});
export default Card;
