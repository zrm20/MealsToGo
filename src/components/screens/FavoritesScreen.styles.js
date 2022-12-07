import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {
        padding: parseInt(theme.space[3]),
        alignItems: 'center'
      },
      title: {
        fontFamily: theme.fonts.heading,
        fontSize: parseInt(theme.fontSizes.h5),
        marginBottom: parseInt(theme.space[2])
      },
      closeButton: {
        backgroundColor: theme.colors.brand.muted,
        position: 'absolute',
        zIndex: 20,
        top: 15,
        right: 15
      }
    }
  );
  return styles;
};
