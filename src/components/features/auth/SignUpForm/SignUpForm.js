import React from "react";
import { View } from "react-native"
import { Formik } from "formik";

import { SubmitButton, TextInput } from "../../../UI";
import signUpFormSchema from "./SignUpForm.schema";
import { useAuth } from "../../../../services/auth/auth.context";
import { Text } from '../../../UI';

export default function SignUpForm() {
  const { signup, error } = useAuth();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  function handleSubmit(values, actions) {
    const { email, password } = values;
    signup(email, password);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpFormSchema}
      onSubmit={handleSubmit}
    >
      <View>
        <TextInput
          name="email"
          label="Email"
          autoComplete="none" // android only
          textContentType="none" // iOS only
          autoCorrect={false}
        />
        <TextInput
          name="password"
          label="Password"
          autoComplete="none" //android only
          textContentType="newPassword" // iOS only
          secureTextEntry
          autoCorrect={false}
        />
        <TextInput
          name="confirmPassword"
          label="Verify Password"
          autoComplete="none" //android only
          textContentType="newPassword" // iOS only
          secureTextEntry
          autoCorrect={false}
        />

        {
          error &&
          <Text variant='error'>{error}</Text>
        }

        <SubmitButton>Sign Up</SubmitButton>
      </View>
    </Formik>
  );
};