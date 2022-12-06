import { StyleSheet } from "react-native";
import { useTheme } from "styled-components/native"

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {
        padding: parseInt(theme.space[3]),
        margin: parseInt(theme.space[3]),
        width: '90%',
        maxWidth: 500
      },
      input: {
        marginBottom: parseInt(theme.space[2])
      },
      button: {

      }
    }
  );
  return styles;
};
