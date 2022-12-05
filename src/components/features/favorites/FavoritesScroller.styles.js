import { StyleSheet } from "react-native";
import { useTheme } from "styled-components/native"

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {
        marginBottom: parseInt(theme.space[3]),
        paddingHorizontal: parseInt(theme.space[3]),
      },
      content: {
        width: '100%',
        height: 150,
      }
    }
  );
  return styles;
};
