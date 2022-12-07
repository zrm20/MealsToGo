import React from "react";
import { View } from "react-native"
import { Formik } from "formik";

import { SubmitButton, TextInput } from "../../../UI";
import { useAuth } from '../../../../services/auth/auth.context';

export default function LoginForm() {
  const { login } = useAuth();

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

        <SubmitButton>Login</SubmitButton>
      </View>

    </Formik>
  )
};