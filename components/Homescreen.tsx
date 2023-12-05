import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/StackHomescreen";

type Props = NativeStackScreenProps<RootStackParamList, "Homescreen">;

const Homescreen: React.FC<Props> = (props) => {
  const { currentUser, showPortfolio } = React.useContext(UserInfoContext);

  const getTitle = (currentUser: string): string => {
    if (showPortfolio) {
      return "¡Te damos la bienvenida, " + currentUser + "!";
    } else {
      return "¡Te damos la bienvenida!";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{getTitle(currentUser)}</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/hakyeon.jpg")}
      />
      {!showPortfolio && (
        <Pressable
          style={styles.button}
          onPress={() => props.navigation.push("StackLogin")}
        >
          <Text style={styles.buttonText}>Identifícate</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce8e6",
  },
  title: {
    borderRadius: 30,
    margin: 30,
    padding: 20,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "500",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
  },
  image: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    alignSelf: "center",
    borderRadius: 100,
    height: "43%",
    width: "80%",
    borderWidth: 1,
    borderColor: "grey",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 60,
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
