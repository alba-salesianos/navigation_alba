import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";

interface signUpProps {
  setSignUp: (param: boolean) => void;
}

const SignUp = (props: signUpProps) => {
  const { setSignUp } = props;
  const { user, setUser, userArray, setUserArray } =
    useContext(UserInfoContext);

  const [userName, setUserName] = useState("");
  const [pw, setPw] = useState("");

  const register = () => {
    setSignUp(false);
    setUser({
      username: userName,
      password: pw,
    });
  };

  return (
    <View style={styles.buttonGroup}>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPw}
        value={pw}
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={() => register()}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  buttonGroup: {
    height: 120,
    justifyContent: "space-around",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
