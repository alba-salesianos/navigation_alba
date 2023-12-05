import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import Card from "./Card";
import { hobbiesData, hobbiesList } from "./HobbiesData";
import { UserInfoContext } from "../../contexts/UserInfoContext";

const Portfolio = () => {
  const { showPortfolio } = React.useContext(UserInfoContext);

  return (
    <View style={styles.container}>
      {showPortfolio ? (
        <View>
          <View style={styles.infoContainer}>
            <Image
              style={styles.avatar}
              source={require("../../assets/images/haechan.webp")}
            ></Image>
            <View style={styles.infoCard}>
              <Text style={styles.descriptionTitle}>Descripción</Text>
              <Text style={styles.descriptionBody}>
                Programadora y traductora. En mis ratos libres, me gusta
                conquistar el mundo.
              </Text>
            </View>
          </View>
          <Text style={styles.subtitle}>cosas que me gustan mucho:</Text>
          <ScrollView nestedScrollEnabled={true}>
            {hobbiesList.map((hobby: hobbiesData, id: number) => {
              return <Card hobby={hobby.hobby} key={hobby.id} />;
            })}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            No tienes permiso para ver esta página. Inicia sesión.
          </Text>
        </View>
      )}
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  textContainer: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    marginTop: 30,
    textAlign: "center",
    fontSize: 35,
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#fce8e6",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  infoCard: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "70%",
    borderWidth: 1,
    borderColor: "grey",
  },
  descriptionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  descriptionBody: {
    textAlign: "justify",
    paddingLeft: 10,
    paddingRight: 10,
  },
  subtitle: {
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});
