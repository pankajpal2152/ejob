const InputField=({ label,name,type="text", formik})=>{
    return(
        <div className="mb-3">
            <label className="block font-semibold ">{label}</label>
            <input type={type}
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 border ${formik.touched[name] && formik.errors[name] ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {formik.touched[name] && formik.errors[name] && (
                <div className="text-red-500 text-sm mt-1">{formik.errors[name]}</div>
            )}
        </div>
    );
};

export default InputField;