import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

export default function useStyles(props) {
  const theme = useTheme();

  const styles = StyleSheet.create(
    {
      container: {
        padding: parseInt(theme.space[3]),
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
      },
      image: {
        width: 140,
        height: 140,
        marginBottom: parseInt(theme.space[2]),
        marginHorizontal: 'auto'
      },
      text: {
        textAlign: 'center',
      }
    }
  );

  return styles;
};