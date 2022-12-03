import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { useTheme } from "styled-components";

export default function LoadingSpinner({ size = 50, ...props }) {
  const { colors } = useTheme();

  return (
    <ActivityIndicator size={size} color={colors.brand.primary} {...props} />
  )
};
