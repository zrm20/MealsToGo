import React from 'react';
import { Text } from 'react-native'
import { useAuth } from '../../services/auth/auth.context';
import { Button, LoadingSpinner, ScreenSafeArea } from '../UI';
import useStyles from './SettingsScreen.styles';

export default function SettingsScreen() {
  const styles = useStyles();
  const { logout, isLoading } = useAuth();

  return (
    <ScreenSafeArea style={styles.container}>
      <Text>Settings</Text>

      {
        isLoading ?
          <LoadingSpinner /> :
          <Button onPress={logout}>Log Out</Button>
      }

    </ScreenSafeArea>
  )
}