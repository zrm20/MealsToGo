import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {
        alignItems: 'center',
      }
    }
  );
  return styles;
};
