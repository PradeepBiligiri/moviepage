import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  password: yup.string().min(8),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationShema: formValidationSchema,
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
        type="email"
        placeholder="email"
      />
      <input
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
