import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivityCard from "./ActivityCard";

type ActivitiesProps = {
  activitiesList: string[];
  setActivitiesList: Function;
};

const ActivityList = (props: ActivitiesProps) => {
  const { activitiesList, setActivitiesList } = props;

  const handleClose = (value: string) => {
    setActivitiesList((activities: string[]) => {
      return activities.filter((activity: string) => activity !== value);
    });
  };
  return (
    <View>
      <FlatList
        style={styles.factsContainer}
        data={activitiesList}
        renderItem={(activity) => (
          <ActivityCard activity={activity.item} handleClose={handleClose} />
        )}
      />
    </View>
  );
};

export default ActivityList;

const styles = StyleSheet.create({
  factsContainer: {
    display: "flex",
    marginVertical: 10,
  },
});
