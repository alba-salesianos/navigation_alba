import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/StackHomescreen";
import { fetchUser } from "../../services/fetchUsers";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: React.FC<Props> = (props) => {
  const { user, setUser, setshowPortfolio, setCurrentUser } =
    useContext(UserInfoContext);

  const loginUsers = async (): Promise<boolean> => {
    let response = true;
    try {
      const loggedUser = await fetchUser(formData, "login");
      if (loggedUser != null) {
        setUser(loggedUser);
        console.log(`El nombre es: ${user.name}`);
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
    password: "",
  });

  const handleInputChange = async (field: string, value: string) => {
    console.log(formData);
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleLogin = async () => {
    if (await loginUsers()) {
      setCurrentUser(user.name);
      setshowPortfolio(true);
      props.navigation.push("Homescreen");
    } else {
      console.log("No se ha encontrado el usuario.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={(value) => handleInputChange("name", value)}
          value={formData.name}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("password", value)}
          placeholder="Contraseña"
          value={formData.password}
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
