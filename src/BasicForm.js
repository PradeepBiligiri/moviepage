import { useFormik } from "formik";
import * as yup from "yup";

const fromValidationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Need a long password")
    .max(12, "Too much password")
    .required("Why not fill password?"),
  email: yup
    .string()
    .min(5, "need longer email")
    .required("Why not fill email?")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Pattern not Matched 🤔"
    ),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: fromValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email"
        placeholder="email"
      />
      <br />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br />
      <input
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="password"
        placeholder="password"
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
