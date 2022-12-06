import React from "react";
import { View } from "react-native";
import { TextInput as PaperInput } from "react-native-paper";
import Text from "../Text";
import { useField } from "formik"
import useStyles from "./TextInput.styles";
import { useTheme } from "styled-components";

export default function TextInput(props) {
  const styles = useStyles();
  const theme = useTheme();
  const [field, meta, utils] = useField(props);
  console.log(meta.error);

  return (
    <View
      style={
        [styles.container, props.style]
      }
    >
      <PaperInput
        mode="outlined"
        label={props.label || props.name}
        onChangeText={utils.setValue}
        onBlur={() => utils.setTouched(true)}
        value={field.value}
        activeOutlineColor={theme.colors.ui.primary}
        style={
          [styles.input, props.inputStyle]
        }
        autoComplete={props.name} // android only
        textContentType={props.name} // ios only
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
      {
        meta.touched && meta.error &&
        <Text
          variant="error"
          style={[styles.errorText, props.errorTextStyle]}
        >
          {meta.error}
        </Text>
      }
    </View>
  )
};