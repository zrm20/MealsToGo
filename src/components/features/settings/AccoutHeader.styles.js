import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {
        width: '100%',
        padding: parseInt(theme.space[3]),
        alignItems: 'center',
        justifyContent: 'center'
      },
      avatar: {
        marginBottom: parseInt(theme.space[2]),
        backgroundColor: theme.colors.ui.primary,
      }
    }
  );
  return styles;
};
