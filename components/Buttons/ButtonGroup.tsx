import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { RootStackParamList } from "../../screens/StackHomescreen";

type Props = NativeStackScreenProps<RootStackParamList, "ButtonGroup">;

const ButtonGroup: React.FC<Props> = (props) => {
  const { user, setUserArray } = useContext(UserInfoContext);

  useEffect(() => {
    if (user.username != "" && user.password != "") {
      setUserArray((userArray: object[]) => [...userArray, user]);
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Pressable
          style={styles.button}
          onPress={() => props.navigation.push("Login")}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => props.navigation.push("Signup")}
        >
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fce8e6",
    flex: 1,
    justifyContent: "center",
  },
  buttonGroup: {
    height: 150,
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 80,
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
