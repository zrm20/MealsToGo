import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

export default function SubmitButton({ children, ...props }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onPress={handleSubmit} {...props} >
      {children}
    </Button>
  )
};