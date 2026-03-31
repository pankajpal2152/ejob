import { useFormik } from 'formik';
import { formSchema } from '../validation/schema';
import InputField from './InputField';
import SelectField from './SelectField';

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            city: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log(values);
            alert("Form submitted successfully!");
        },
    });
    return (
        <div className="max-w-md mx-auto bg-white shadow p-5 rounded mt-5">
            <h2 className="text-xl font-bold mb-3">Signup Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <InputField label="Name" name="name" formik={formik} />
                <InputField label="Age" name="age" type="number" formik={formik} />
                <InputField label="Email" name="email" type="email" formik={formik} />
                <InputField label="Phone" name="phone" formik={formik} />
                <InputField label="Password" name="password" type="password" formik={formik} />
                <InputField label="Confirm Password" name="confirmPassword" type="password" formik={formik} />
                <SelectField label="City" name="city" options={["New York", "Los Angeles", "Chicago"]} formik={formik} />

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>

            </form>
        </div>
    );
};

export default Form;
