import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { useTheme } from "styled-components";

export default function Button({ children, color = "primary", style = {}, ...props }) {
  const { colors } = useTheme();
  return (
    <PaperButton
      {...props}
      style={{ ...styles.container, ...style }}
      color={colors.ui[color]}
    >
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create(
  {
    container: {

    }
  }
);
