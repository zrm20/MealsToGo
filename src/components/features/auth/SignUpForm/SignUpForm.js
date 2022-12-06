import React from "react";
import { View } from "react-native"
import { Formik } from "formik";

import { SubmitButton, TextInput } from "../../../UI";
import signUpFormSchema from "./SignUpForm.schema";

export default function SignUpForm() {
  const initialValues = {
    name: "",
    username: "",
    password: "",
    confirmPassword: ""
  };

  function handleSubmit(values, actions) {
    console.log('Submitting:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpFormSchema}
      onSubmit={handleSubmit}
    >
      <View>
        <TextInput
          name="name"
          label="Name"
        />
        <TextInput
          name="username"
          label="Username"
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
        <SubmitButton>Sign Up</SubmitButton>
      </View>
    </Formik>
  );
};