import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

import { Text } from '../../UI';
import { useAuth } from "../../../services/auth/auth.context";
import useStyles from './AccoutHeader.styles';

export default function AccountHeader() {
  const { user } = useAuth();
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Avatar.Icon
        icon="account"
        style={styles.avatar}
        size={100}
      />
      <Text>{user.email}</Text>
    </View>
  )
}
