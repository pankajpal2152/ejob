const SelectField = ({ label, name, options, formik }) => {
    return (
        <div className="mb-3">
            <label>{label}</label>

            <select name={name} onChange={formik.handleChange} value={formik.values[name]}
                className="w-full p-2 border rounded">
                <option value="">Select</option>
                {options.map((opt, i) => (
                    <option key={i}>{opt}</option>
                ))}
            </select>
            {formik.errors[name] && (
                <p className="text-red-500">{formik.errors[name]}</p>
            )}
        </div>
    );
};

export default SelectField;