import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
    const [tableData, setTableData] = useState([]);

    // 1. Yup Validation Schema (Replaces centralized validation logic)
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[A-Za-z]{2,30}$/, "Only letters allowed (2-30 chars)")
            .required("This field is required"),
        middleName: Yup.string()
            .test("is-valid", "Only letters allowed", value => !value || /^[A-Za-z]{2,30}$/.test(value)),
        lastName: Yup.string()
            .matches(/^[A-Za-z]{2,30}$/, "Only letters allowed (2-30 chars)")
            .required("This field is required"),
        age: Yup.string()
            .matches(/^(1[89]|[2-7][0-9]|80)$/, "Age must be between 18-80")
            .required("This field is required"),
        phone: Yup.string()
            .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number")
            .required("This field is required"),
        email: Yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
            .required("This field is required"),
        address: Yup.string()
            .max(120, "Maximum 120 characters allowed")
            .required("This field is required"),
        state: Yup.string()
            .required("This field is required"),
        city: Yup.string()
            .required("This field is required"),
        pinCode: Yup.string()
            .matches(/^[0-9]{6}$/, "Pin code must be exactly 6 digits")
            .required("This field is required"),
        password: Yup.string()
            .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/, "Min 6 chars, 1 uppercase, 1 number, 1 special char")
            .required("This field is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords do not match")
            .required("This field is required")
    });

    // 2. Formik Hook Setup
    const formik = useFormik({
        initialValues: {
            firstName: "", middleName: "", lastName: "",
            age: "", phone: "", email: "", address: "",
            state: "", city: "", pinCode: "", password: "", confirmPassword: ""
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            setTableData([...tableData, values]);
            resetForm();
        }
    });

    // Custom handler to keep your numeric-only restriction during typing
    const handleCustomChange = (e) => {
        const { name, value } = e.target;
        if (["age", "phone", "pinCode"].includes(name) && !/^\d*$/.test(value)) return;
        formik.handleChange(e);
    };

    // 3. Reusable JSX Helper updated for Formik
    const renderInput = (label, name, type = "text", placeholder, col = "col-md-4", maxLength = null) => (
        <div className={`${col} mb-3`}>
            <label className="form-label font-weight-bold">
                {label} {name !== 'middleName' && <span className="text-danger">*</span>}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formik.values[name]}
                onChange={handleCustomChange}
                onBlur={formik.handleBlur}
                maxLength={maxLength}
                className={`form-control ${formik.touched[name] && formik.errors[name] ? "is-invalid" : ""}`}
            />
            {formik.touched[name] && formik.errors[name] && (
                <div className="invalid-feedback">{formik.errors[name]}</div>
            )}
        </div>
    );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">User Registration</h2>

            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className="card p-4 shadow-sm border-0 bg-light">
                <div className="row">
                    {renderInput("First Name", "firstName", "text", "e.g., Rahul")}
                    {renderInput("Middle Name", "middleName", "text", "e.g., Kumar")}
                    {renderInput("Last Name", "lastName", "text", "e.g., Sharma")}
                </div>

                <div className="row">
                    {renderInput("Age", "age", "text", "e.g., 25", "col-md-3", 2)}
                    {renderInput("Phone", "phone", "text", "e.g., 9876543210", "col-md-4", 10)}
                    {renderInput("Email", "email", "email", "e.g., user@example.com", "col-md-5")}
                </div>

                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label className="form-label font-weight-bold">Address <span className="text-danger">*</span></label>
                        <textarea
                            name="address"
                            placeholder="e.g., 45 Park Street, Kolkata"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            maxLength={120}
                            rows={2}
                            className={`form-control ${formik.touched.address && formik.errors.address ? "is-invalid" : ""}`}
                        />
                        <small className="text-muted d-block text-end">{formik.values.address.length}/120</small>
                        {formik.touched.address && formik.errors.address && (
                            <div className="invalid-feedback d-block">{formik.errors.address}</div>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label font-weight-bold">State <span className="text-danger">*</span></label>
                        <select 
                            name="state" 
                            value={formik.values.state} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            className={`form-select form-control ${formik.touched.state && formik.errors.state ? "is-invalid" : ""}`}
                        >
                            <option value="">Select State</option>
                            <option>West Bengal</option>
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                        </select>
                        {formik.touched.state && formik.errors.state && <div className="invalid-feedback">{formik.errors.state}</div>}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label font-weight-bold">City <span className="text-danger">*</span></label>
                        <select 
                            name="city" 
                            value={formik.values.city} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            className={`form-select form-control ${formik.touched.city && formik.errors.city ? "is-invalid" : ""}`}
                        >
                            <option value="">Select City</option>
                            <option>Kolkata</option>
                            <option>Mumbai</option>
                            <option>New Delhi</option>
                        </select>
                        {formik.touched.city && formik.errors.city && <div className="invalid-feedback">{formik.errors.city}</div>}
                    </div>

                    {renderInput("Pin Code", "pinCode", "text", "e.g., 700001", "col-md-4", 6)}
                </div>

                <div className="row">
                    {renderInput("Password", "password", "password", "Enter secure password", "col-md-6")}
                    {renderInput("Confirm Password", "confirmPassword", "password", "Re-enter password", "col-md-6")}
                </div>

                <div className="d-flex gap-3 mt-3">
                    <button type="submit" className="btn btn-primary px-4">Submit</button>
                    <button type="reset" className="btn btn-outline-secondary px-4">Reset</button>
                </div>
            </form>

            {/* Table Section */}
            <div className="card shadow-sm border-0 mt-5">
                <div className="card-header bg-dark text-white">
                    <h5 className="mb-0">Submitted Users</h5>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover mb-0">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-muted">No records submitted yet.</td>
                                </tr>
                            ) : (
                                tableData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{`${data.firstName} ${data.middleName ? data.middleName + ' ' : ''}${data.lastName}`}</td>
                                        <td>{data.age}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.email}</td>
                                        <td>{data.city}</td>
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

export default Form;