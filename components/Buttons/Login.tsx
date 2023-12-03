import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";

const SignUp = () => {
  const { user, userArray, setLogin, setshowPortfolio, setCurrentUser } =
    useContext(UserInfoContext);

  const [userName, setUserName] = useState("");
  const [pw, setPw] = useState("");

  const Login = () => {
    userArray.map((userInfo) => {
      if (userName === userInfo.username && pw === userInfo.password) {
        setshowPortfolio(true);
        setLogin(false);
        setCurrentUser(userInfo.username);
      }
    });
  };
  console.log(user);

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
      <Pressable style={styles.button} onPress={() => Login()}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  buttonGroup: {
    marginTop: 50,
    height: 180,
    justifyContent: "space-around",
  },

  input: {
    borderRadius: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
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
