import * as Yup from "yup";

export const formSchema = Yup.object({
    name: Yup.string().required("Name is required"),

    age: Yup.number()
        .required("Age is required")
        .min(18, "You must be at least 18 years old")
        .max(100, "Age must be less than or equal to 100"),

    email: Yup.string().email("Invalid email format").required("Email is required"),

    phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Must be 10 digits"),

    password: Yup.string()
        .min(6, "Min 6 chars")
        .required("Password required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm required"),

    city: Yup.string().required("City required"),

});