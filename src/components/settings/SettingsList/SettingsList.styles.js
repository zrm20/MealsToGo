import { StyleSheet } from "react-native";
import { useTheme } from "styled-components"

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {
        width: '100%',
        paddingHorizontal: parseInt(theme.space[2])
      }
    }
  );
  return styles;
};
