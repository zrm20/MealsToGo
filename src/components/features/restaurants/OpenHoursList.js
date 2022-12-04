import React from "react";
import { View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import Text from "../../UI/Text";

export default function OpenHoursList(props) {
  return (
    <List.Section style={styles.container}>
      <List.Accordion
        title="Open Hours"
        left={props => <List.Icon {...props} icon="clock-time-five-outline" />}
      >
        <List.Item title="Monday" />
      </List.Accordion>
    </List.Section>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      width: '100%'
    }
  }
);
