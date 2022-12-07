import React from 'react';
import { useAuth } from '../../services/auth/auth.context';
import AccountHeader from '../features/settings/AccountHeader';
import SettingsList from '../features/settings/SettingsList';
import { LoadingBackdrop, ScreenSafeArea } from '../UI';
import useStyles from './SettingsScreen.styles';

export default function SettingsScreen() {
  const styles = useStyles();
  const { isLoading } = useAuth();

  return (
    <ScreenSafeArea style={styles.container}>
      {
        isLoading &&
        <LoadingBackdrop />
      }

      <AccountHeader />
      <SettingsList />
    </ScreenSafeArea>
  )
}