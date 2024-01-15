import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/StackHomescreen";
import { fetchUser } from "../../services/fetchUsers";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const Signup: React.FC<Props> = (props) => {
  const { user, setUser } = React.useContext(UserInfoContext);

  const registerUsers = async () => {
    try {
      const name = await fetchUser(user, "register");
      console.log(`El nombre es: ${name}`);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const [formData, setFormData] = React.useState({
    userName: "",
    eMail: "",
    pw: "",
  });

  const handleInputChange = async (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    await setUser({
      name: formData.userName,
      email: formData.eMail,
      password: formData.pw,
    });
  };

  const handleSignup = () => {
    props.navigation.goBack();
    registerUsers();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={(value) => handleInputChange("userName", value)}
          value={formData.userName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(value) => handleInputChange("eMail", value)}
          value={formData.eMail}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("pw", value)}
          placeholder="Contraseña"
          value={formData.pw}
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
