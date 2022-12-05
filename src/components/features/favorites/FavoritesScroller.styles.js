import { StyleSheet } from "react-native";
import { useTheme } from "styled-components/native"

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {
        width: '100%',
        marginBottom: parseInt(theme.space[2]),
        paddingHorizontal: parseInt(theme.space[3]),
      },
      content: {
      },
      emptyText: {
      }
    }
  );
  return styles;
};
