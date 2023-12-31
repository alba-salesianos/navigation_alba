import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/StackHomescreen";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: React.FC<Props> = (props) => {
  const { userArray, setshowPortfolio, setCurrentUser } =
    useContext(UserInfoContext);

  const [userName, setUserName] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    userArray.map((userInfo) => {
      if (userName === userInfo.username && pw === userInfo.password) {
        setshowPortfolio(true);
        props.navigation.push("Homescreen");
        setCurrentUser(userInfo.username);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={setUserName}
          value={userName}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={setPw}
          value={pw}
          secureTextEntry={true}
        />
        <Pressable style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fce8e6",
  },
  buttonGroup: {
    height: 200,
    justifyContent: "space-around",
  },
  input: {
    borderRadius: 5,
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    backgroundColor: "white",
    borderColor: "grey",
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

export default Login;
