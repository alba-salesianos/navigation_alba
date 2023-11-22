import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const Homescreen = () => {
  return (
    <View>
      <Text style={styles.title}>¡Te damos la bienvenida!</Text>
      <Image style={styles.image} source={require("../assets/images/hakyeon.jpg")}/>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 50,
  },
  image: {
    margin: 50,
    alignSelf: 'center',
    borderRadius: 100,
    height: '50%',
    width: '80%'
  }, 
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      alignSelf: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: 'blue',
  }, 
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
