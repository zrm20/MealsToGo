import * as Yup from 'yup';

const signUpFormSchema = Yup.object(
  {
    name: Yup.string()
      .required('Name is required')
      .min(2, "Minimum 2 characters"),
    username: Yup.string()
      .required('Username is required')
      .min(2, "Minimum 2 characters"),
    password: Yup.string()
      .required('Password is required')
      .min(8, "Minimum 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please verify your password')
  }
);

export default signUpFormSchema;