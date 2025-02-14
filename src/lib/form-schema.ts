import * as yup from "yup";

// This schema is used in this way because the tanstack/react-form library uses
//  a very wierd way of defining the schema,
// very different from other form libraries.

export const measurementSchema = {
  title: yup.string().required(),
  price: yup.number().positive().required(),
  gender: yup.string().oneOf(["Male", "Female", "Others"]).required(),
  notes: yup.string().required(),
  measurements: yup.array().of(
    yup.object().shape({
      title: yup.string().required(),
      unit: yup.string().required(),
    })
  ),
};
