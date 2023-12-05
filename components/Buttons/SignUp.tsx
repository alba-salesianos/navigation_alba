import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/StackHomescreen";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const Signup: React.FC<Props> = (props) => {
  const { setUser } = React.useContext(UserInfoContext);

  const [userName, setUserName] = React.useState("");
  const [pw, setPw] = React.useState("");

  const handleSignup = () => {
    props.navigation.goBack();
    setUser({
      username: userName,
      password: pw,
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
          onChangeText={setPw}
          placeholder="Contraseña"
          value={pw}
          secureTextEntry={true}
        />
        <Pressable style={styles.button} onPress={() => handleSignup()}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

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
    padding: 12,
    backgroundColor: "white",
    borderWidth: 1,
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
