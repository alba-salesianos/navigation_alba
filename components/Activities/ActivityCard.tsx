import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ActivityCard = (activity: string) => {
  return (
    <View>
      <Text>{activity}</Text>
    </View>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({});
