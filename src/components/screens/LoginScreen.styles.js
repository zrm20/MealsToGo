import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      imageBackground: {
        flex: 1
      },
      container: {
      },
      keyboardView: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, .4)"
      },
      title: {
        textAlign: "center",
        fontSize: parseInt(theme.fontSizes.h3),
        fontFamily: theme.fonts.heading,
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.brand.primary
      }
    }
  );
  return styles;
};
