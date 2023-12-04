import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/StackHomescreen";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const SignUp: React.FC<Props> = (props) => {
  const { setUser } = useContext(UserInfoContext);

  const [userName, setUserName] = useState("");
  const [pw, setPw] = useState("");

  const register = () => {
    props.navigation.goBack();
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
