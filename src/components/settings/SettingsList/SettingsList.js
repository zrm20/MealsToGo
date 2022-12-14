import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { List } from "react-native-paper";
import { useAuth } from "../../../services/auth/auth.context";
import useStyles from "./SettingsList.styles";

export default function SettingsList(props) {
  const { logout } = useAuth();
  const { navigate } = useNavigation();
  const styles = useStyles();

  const settingsList = [
    {
      title: "Favorites",
      icon: "star",
      onPress: () => navigate("Favorites")
    },
    {
      title: "Log Out",
      icon: "logout",
      onPress: logout
    }
  ];


  return (
    <View style={styles.container} >
      {
        settingsList.map(item => (
          <TouchableOpacity key={item.title} onPress={item.onPress}>
            <List.Item
              title={item.title}
              left={props => <List.Icon {...props} icon={item.icon} />}
            />
          </TouchableOpacity>
        ))
      }
    </View>
  );
};
