import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fetchActivity } from "../services/boredActivities";
import ActivityList from "../components/Activities/ActivityList";

const APIScreen = () => {
  const [activity, setActivity] = React.useState("");
  const [activitiesList, setActivitiesList] = React.useState<string[]>([]);

  const fetchActivities = () => {
    const fetchData = async () => {
      const newActivity = await fetchActivity();

      console.log(newActivity);
      setActivity(newActivity);
      setActivitiesList((list) => [...list, newActivity]);
    };

    fetchData();
  };

  return (
    <View>
      <Pressable
        onPress={fetchActivities}
        style={styles.submitButton}
        accessibilityLabel="buscar actividades"
      >
        <Text style={styles.buttonText}> Buscar actividades </Text>
      </Pressable>
      <ActivityList
        activitiesList={activitiesList}
        setActivitiesList={setActivitiesList}
      />
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
