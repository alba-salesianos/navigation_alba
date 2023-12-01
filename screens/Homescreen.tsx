import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ButtonGroups from "../components/Buttons/ButtonGroups";
import { UserInfoContext } from "../contexts/UserInfoContext";
import SignUp from "../components/Buttons/SignUp";
import Login from "../components/Buttons/Login";
import LoginSignup from "./LoginSignup";

const Homescreen = () => {
  const { login, user, userArray, currentUser, setUserArray, showPortfolio } =
    useContext(UserInfoContext);
  const [signUp, setSignUp] = useState(false);

  console.log("Sign up:" + signUp);
  console.log(userArray);
  console.log(user);
  console.log("Login:" + login);
  console.log("Show Portfolio:" + showPortfolio);

  const getTitle = (currentUser: string): string => {
    if (showPortfolio) {
      return "¡Te damos la bienvenida, " + currentUser + "!";
    } else {
      return "¡Te damos la bienvenida!";
    }
  };

  useEffect(() => {
    if (user.username != "" && user.password != "") {
      setUserArray((userArray: object[]) => [...userArray, user]);
    }
  }, [user]);

  return (
    <View>
      <Text style={styles.title}>{getTitle(currentUser)}</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/hakyeon.jpg")}
      />
      {!showPortfolio && <LoginSignup setSignUp={setSignUp} signUp={signUp} />}
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 50,
  },
  image: {
    margin: 50,
    alignSelf: "center",
    borderRadius: 100,
    height: "43%",
    width: "80%",
  },
});
