import React from "react";
import { View } from "react-native"
import { Formik } from "formik";

import { SubmitButton, Text, TextInput } from "../../../UI";
import { useAuth } from '../../../../services/auth/auth.context';

export default function LoginForm() {
  const { login, error } = useAuth();

  const initialValues = {
    email: "",
    password: ""
  };

  function handleSubmit(values, actions) {
    const { email, password } = values;
    login(email, password);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <View>
        <TextInput
          name="email"
          label="Email"
        />
        <TextInput
          name="password"
          label="Password"
          secureTextEntry
        />

        {
          error &&
          <Text variant='error'>{error}</Text>
        }

        <SubmitButton>Login</SubmitButton>
      </View>

    </Formik>
  )
};