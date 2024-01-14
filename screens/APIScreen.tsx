import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fetchUser } from "../services/fetchUsers";
import { UserInfoContext } from "../contexts/UserInfoContext";

const APIScreen = () => {
  const { user } = React.useContext(UserInfoContext);
  const fetchActivities = () => {
    const fetchData = async () => {
      const name = await fetchUser(user);
      console.log(`El nombre es: ${name}`);
    };

    fetchData();
  };

  return (
    <View>
      <Pressable
        onPress={fetchActivities}
        style={styles.submitButton}
        accessibilityLabel="buscar usuario"
      >
        <Text style={styles.buttonText}> Buscar usuario </Text>
      </Pressable>
    </View>
  );
};

export default APIScreen;

const styles = StyleSheet.create({
  submitButton: {
    margin: 50,
    backgroundColor: "royalblue",
    color: "white",
    width: "50%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
  },
});
