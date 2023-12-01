import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";

interface signUpProps {
  setSignUp: Function;
}

const ButtonGroups = (props: signUpProps) => {
  const { setLogin } = useContext(UserInfoContext);
  const { setSignUp } = props;

  return (
    <View style={styles.buttonGroup}>
      <Pressable style={styles.button} onPress={() => setLogin(true)}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setSignUp(true)}>
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
