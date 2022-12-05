import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {

      },
      map: {
        width: '100%',
        height: 150,
        marginBottom: 16
      }
    }
  );
  return styles;
};
