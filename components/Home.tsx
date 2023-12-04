import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/StackHomescreen";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: React.FC<Props> = (props) => {
  const { currentUser, showPortfolio } = useContext(UserInfoContext);

  const getTitle = (currentUser: string): string => {
    if (showPortfolio) {
      return "¡Te damos la bienvenida, " + currentUser + "!";
    } else {
      return "¡Te damos la bienvenida!";
    }
  };

  return (
    <View>
      <Text style={styles.title}>{getTitle(currentUser)}</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/hakyeon.jpg")}
      />
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.push("LoginSignup")}
      >
        <Text style={styles.buttonText}>Identifícate</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 50,
  },
  image: {
    margin: 50,
    alignSelf: "center",
    borderRadius: 100,
    height: "43%",
    width: "80%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
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

export default Home;
