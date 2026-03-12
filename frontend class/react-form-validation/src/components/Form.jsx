import React, { useState } from "react";

function Form() {
    const initialState = {
        firstName: "", middleName: "", lastName: "",
        age: "", phone: "", email: "", address: "",
        state: "", city: "", pinCode: "", password: "", confirmPassword: ""
    };

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [tableData, setTableData] = useState([]);

    const regex = {
        name: /^[A-Za-z]{2,30}$/,
        age: /^(1[89]|[2-7][0-9]|80)$/,
        phone: /^[6-9]\d{9}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        pincode: /^[0-9]{6}$/,
        password: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/
    };

    // 1. Centralized Validation Logic
    const validateField = (name, value, currentData) => {
        // Required check (middleName is optional)
        if (!value && name !== "middleName") return "This field is required";

        switch (name) {
            case "firstName":
            case "lastName":
                return regex.name.test(value) ? "" : "Only letters allowed (2-30 chars)";
            case "middleName":
                return !value || regex.name.test(value) ? "" : "Only letters allowed";
            case "age":
                return regex.age.test(value) ? "" : "Age must be between 18-80";
            case "phone":
                return regex.phone.test(value) ? "" : "Enter a valid 10-digit phone number";
            case "email":
                return regex.email.test(value) ? "" : "Invalid email format";
            case "pinCode":
                return regex.pincode.test(value) ? "" : "Pin code must be exactly 6 digits";
            case "password":
                return regex.password.test(value) ? "" : "Min 6 chars, 1 uppercase, 1 number, 1 special char";
            case "confirmPassword":
                return value === currentData.password ? "" : "Passwords do not match";
            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Numeric-only restrictions
        if (["age", "phone", "pinCode"].includes(name) && !/^\d*$/.test(value)) return;

        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);

        // Validate specifically the field being typed in
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value, updatedData) }));
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        Object.keys(formData).forEach((field) => {
            const errorMessage = validateField(field, formData[field], formData);
            if (errorMessage) {
                newErrors[field] = errorMessage;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setTableData([...tableData, formData]);
            handleReset();
        }
    };

    const handleReset = () => {
        setFormData(initialState);
        setErrors({});
    };

    // 2. Reusable JSX Helper to reduce code duplication
    const renderInput = (label, name, type = "text", placeholder, col = "col-md-4", maxLength = null) => (
        <div className={`${col} mb-3`}>
            <label className="form-label font-weight-bold">{label} {name !== 'middleName' && <span className="text-danger">*</span>}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                maxLength={maxLength}
                className={`form-control ${errors[name] ? "is-invalid" : ""}`}
            />
            {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
        </div>
    );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">User Registration</h2>

            <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0 bg-light">
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
                            value={formData.address}
                            onChange={handleChange}
                            maxLength={120} // Enforces max chars at the HTML level
                            rows={2}
                            className={`form-control ${errors.address ? "is-invalid" : ""}`}
                        />
                        <small className="text-muted d-block text-end">{formData.address.length}/120</small>
                        {errors.address && <div className="invalid-feedback d-block">{errors.address}</div>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label font-weight-bold">State <span className="text-danger">*</span></label>
                        <select name="state" value={formData.state} onChange={handleChange} className={`form-select form-control ${errors.state ? "is-invalid" : ""}`}>
                            <option value="">Select State</option>
                            <option>West Bengal</option>
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                        </select>
                        {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label font-weight-bold">City <span className="text-danger">*</span></label>
                        <select name="city" value={formData.city} onChange={handleChange} className={`form-select form-control ${errors.city ? "is-invalid" : ""}`}>
                            <option value="">Select City</option>
                            <option>Kolkata</option>
                            <option>Mumbai</option>
                            <option>New Delhi</option>
                        </select>
                        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                    </div>

                    {renderInput("Pin Code", "pinCode", "text", "e.g., 700001", "col-md-4", 6)}
                </div>

                <div className="row">
                    {renderInput("Password", "password", "password", "Enter secure password", "col-md-6")}
                    {renderInput("Confirm Password", "confirmPassword", "password", "Re-enter password", "col-md-6")}
                </div>

                <div className="d-flex gap-3 mt-3">
                    <button type="submit" className="btn btn-primary px-4">Submit</button>
                    <button type="button" className="btn btn-outline-secondary px-4" onClick={handleReset}>Reset</button>
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
                                        {/* Combined name logic for a cleaner table view */}
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