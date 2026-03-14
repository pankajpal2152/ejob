import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// 1. Moved InputField OUTSIDE of SignupForm
// 2. Added `formik` as a prop so it can access values, errors, and handlers
const InputField = ({
    label,
    name,
    type = "text",
    placeholder,
    maxLength,
    numbersOnly = false,
    formik
}) => {
    const handleInput = e => {
        if (numbersOnly) {
            e.target.value = e.target.value.replace(/\D/g, "");
        }
        if (maxLength) {
            e.target.value = e.target.value.slice(0, maxLength);
        }
    };

    return (
        <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">
                {label} <span className="text-danger">*</span>
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onInput={handleInput}
                maxLength={maxLength}
                className={`form-control ${formik.touched[name] && formik.errors[name]
                    ? "is-invalid"
                    : formik.touched[name]
                        ? "is-valid"
                        : ""
                    }`}
            />
            {formik.touched[name] && formik.errors[name] && (
                <div className="invalid-feedback">
                    {formik.errors[name]}
                </div>
            )}
        </div>
    );
};

function SignupForm() {
    const [tableData, setTableData] = useState([]);
    const fileRef = useRef();

    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/gif"
    ];

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[A-Za-z]+$/, "Only letters allowed")
            .min(2, "Minimum 2 characters")
            .max(30, "Maximum 30 characters")
            .required("First name is required"),
        lastName: Yup.string()
            .matches(/^[A-Za-z]+$/, "Only letters allowed")
            .min(2, "Minimum 2 characters")
            .max(30, "Maximum 30 characters")
            .required("Last name is required"),
        phone: Yup.string()
            .matches(/^[6-9]\d{9}$/, "Enter valid 10 digit phone number")
            .required("Phone number is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .matches(
                /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/,
                "Min 6 chars, 1 uppercase, 1 number, 1 special char"
            )
            .required("Password required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords do not match")
            .required("Confirm password required"),
        profilePic: Yup.mixed()
            .required("Profile picture required")
            .test(
                "fileFormat",
                "Only JPG JPEG PNG GIF allowed",
                value => value && SUPPORTED_FORMATS.includes(value.type)
            )
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            profilePic: null
        },
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values, { resetForm }) => {
            if (!formik.isValid) return;
            const imageUrl = URL.createObjectURL(values.profilePic);
            setTableData([
                ...tableData,
                { ...values, profilePicUrl: imageUrl }
            ]);
            resetForm();
            fileRef.current.value = "";
        }
    });

    const handleReset = () => {
        formik.resetForm();
        fileRef.current.value = "";
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="card shadow border-0 p-4">
                <h3 className="text-center mb-4">User Registration</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        {/* 3. Pass the formik instance down as a prop to every InputField */}
                        <InputField
                            label="First Name"
                            name="firstName"
                            placeholder="e.g. John"
                            maxLength={30}
                            formik={formik}
                        />
                        <InputField
                            label="Last Name"
                            name="lastName"
                            placeholder="e.g. Doe"
                            maxLength={30}
                            formik={formik}
                        />
                    </div>
                    <div className="row">
                        <InputField
                            label="Phone Number"
                            name="phone"
                            placeholder="e.g. 9876543210"
                            maxLength={10}
                            numbersOnly
                            formik={formik}
                        />
                        <InputField
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="e.g. john@email.com"
                            formik={formik}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">
                            Profile Picture <span className="text-danger">*</span>
                        </label>
                        <input
                            ref={fileRef}
                            type="file"
                            name="profilePic"
                            accept=".jpg,.jpeg,.png,.gif"
                            className={`form-control ${formik.touched.profilePic && formik.errors.profilePic
                                ? "is-invalid"
                                : ""
                                }`}
                            onChange={e =>
                                formik.setFieldValue(
                                    "profilePic",
                                    e.currentTarget.files[0]
                                )
                            }
                        />
                        {formik.touched.profilePic && formik.errors.profilePic && (
                            <div className="invalid-feedback d-block">
                                {formik.errors.profilePic}
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <InputField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter secure password"
                            formik={formik}
                        />
                        <InputField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Re-enter password"
                            formik={formik}
                        />
                    </div>
                    <div className="mt-4 d-flex gap-3">
                        <button type="submit" className="btn btn-primary px-4">
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="btn btn-outline-secondary px-4"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
            {/* The rest of your table code remains exactly the same below */}
            <div className="card shadow mt-5 border-0">
                <div className="card-header bg-dark text-white">
                    Submitted Users
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle mb-0">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-4">
                                        No users submitted yet
                                    </td>
                                </tr>
                            ) : (
                                tableData.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img
                                                src={user.profilePicUrl}
                                                alt="profile"
                                                width="50"
                                                height="50"
                                                style={{
                                                    borderRadius: "50%",
                                                    objectFit: "cover"
                                                }}
                                            />
                                        </td>
                                        <td>
                                            {user.firstName} {user.lastName}
                                        </td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;