import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {
        marginBottom: parseInt(theme.space[2])
      },
      input: {
        marginBottom: parseInt(theme.space[1])
      },
      errorText: {
        paddingLeft: parseInt(theme.space[2])
      }
    }
  );
  return styles;
};
