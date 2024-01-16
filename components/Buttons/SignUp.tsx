import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/StackHomescreen";
import { fetchUser } from "../../services/fetchUsers";
import Container, { Toast } from "toastify-react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const Signup: React.FC<Props> = (props) => {
  const { setUser } = React.useContext(UserInfoContext);

  const registerUsers = async (): Promise<boolean> => {
    let response = true;
    try {
      const registeredUser = await fetchUser(formData, "register");

      if (registeredUser != null) {
        setUser(registeredUser);
      } else {
        response = false;
      }
    } catch (error) {
      console.error("Error during registration:", error);
      response = false;
    }
    return response;
  };

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = async (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSignup = async () => {
    if (
      formData.name == "" ||
      formData.password == "" ||
      formData.email == ""
    ) {
      Toast.warn("Capón, rellena los 3 campos.", "top");
    } else {
      if (await registerUsers()) {
        props.navigation.goBack();
      } else {
        Toast.error("Alguno de estos datos ya existe.", "top");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Container width={370} />
      <View style={styles.buttonGroup}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={(value) => handleInputChange("name", value)}
          value={formData.name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(value) => handleInputChange("email", value)}
          value={formData.email}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("password", value)}
          placeholder="Contraseña"
          value={formData.password}
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
