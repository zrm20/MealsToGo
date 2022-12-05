import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {
        marginRight: parseInt(theme.space[1]),
        height: props.size * 1.5,
        width: props.size * 1.2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        marginHorizontal: parseInt(theme.space[1]),
        marginBottom: parseInt(theme.space[1])
      },
      text: {
        marginBottom: parseInt(theme.space[1])
      }
    }
  );
  return styles;
};
