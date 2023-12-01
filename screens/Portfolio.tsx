import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useContext } from "react";
import Card from "../components/Card";
import { hobbiesData, hobbiesList } from "../components/HobbiesData";
import { UserInfoContext } from "../contexts/UserInfoContext";

const Portfolio = () => {
  const { showPortfolio } = useContext(UserInfoContext);

  return (
    <View style={styles.container}>
      {showPortfolio ? (
        <View>
          <View style={styles.infoContainer}>
            <Image
              style={styles.avatar}
              source={require("../assets/images/haechan.webp")}
            ></Image>
            <View style={styles.infoBackground}>
              <Text style={styles.description}>Descripción</Text>
              <Text style={styles.descriptionBody}>
                Programadora y traductora. Y en mis ratos libres me gusta
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
        <View>
          <Text>No tiene permiso para ver esta página</Text>
        </View>
      )}
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    color: "black",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
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

  infoBackground: {
    color: "black",
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  description: {
    color: "black",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  descriptionBody: {
    color: "black",
  },

  subtitle: {
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
});
