import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { LoginStackParamList } from "../../screens/LoginSignup";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UserInfoContext } from "../../contexts/UserInfoContext";

type Props = NativeStackScreenProps<LoginStackParamList, "ButtonGroups">;

const ButtonGroups: React.FC<Props> = (props) => {
  const { user, setUserArray } = useContext(UserInfoContext);

  useEffect(() => {
    if (user.username != "" && user.password != "") {
      setUserArray((userArray: object[]) => [...userArray, user]);
    }
  }, [user]);

  return (
    <View style={styles.buttonGroup}>
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.push("Login")}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.push("SignUp")}
      >
        <Text style={styles.buttonText}>Crear Cuenta</Text>
      </Pressable>
    </View>
  );
};

export default ButtonGroups;

const styles = StyleSheet.create({
  buttonGroup: {
    height: 120,
    justifyContent: "space-around",
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
