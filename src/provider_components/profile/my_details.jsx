import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Icon } from "@iconify/react";

const getMaxDate = () => new Date().toISOString().split("T")[0];
const getMinDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 30);
    return date.toISOString().split("T")[0];
};

export default function MyDetails() {
    const getMinAgeDate = () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 18);
        return date.toISOString().split("T")[0];
    };
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
            .min(2, 'First name must be at least 2 characters')
            .max(50, 'First name must be less than 50 characters')
            .required('First name is required'),

        lastName: Yup.string()
            .matches(/^[A-Za-z]+$/, 'Last name must contain only letters')
            .min(2, 'Last name must be at least 2 characters')
            .max(50, 'Last name must be less than 50 characters')
            .required('Last name is required'),

        gender: Yup.string()
            .matches(/^(MALE|FEMALE)$/, 'Gender must be either MALE or FEMALE')
            .required('Gender is required'),

        dateOfBirth: Yup.date()
            .max(getMinAgeDate(), 'Date of birth cannot be in the future')
            .required('Date of Birth is required')
    });

    return (
        <div className={`mx-[15px]`}>
            <Formik
                initialValues={{ firstName: '', lastName: '', gender: '', dateOfBirth: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const response = await fetch('/api/submit', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(values),
                        });

                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }

                        // Optionally handle response data
                        const result = await response.json();
                        console.log(result);
                    } catch (error) {
                        console.error('Error:', error);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form className={'grid grid-cols-1 md:grid-cols-2'}>
                        <section className={'flex-col order-1 gap-5 p-[15px]'}>
                            <p className={'text-sm md:text-2xl font-thin'}>Firstname</p>
                            <Field
                                name={'firstName'}
                                type={'text'}
                                placeholder={'First name'}
                                className={'text-sm md:text-2xl border-2 border-black font-thin px-[5px] py-[2px] rounded w-[80%] md:w-[250px]'}
                            />
                            {errors.firstName && touched.firstName ? (
                                <div className="text-red-500">{errors.firstName}</div>
                            ) : null}
                        </section>

                        <section className={'flex-col order-2 gap-5 p-[15px]'}>
                            <p className={'text-sm md:text-2xl font-thin'}>Lastname</p>
                            <Field
                                name={'lastName'}
                                type={'text'}
                                placeholder={'Lastname'}
                                className={'text-sm md:text-2xl border-2 border-black font-thin px-[5px] py-[2px] rounded w-[80%] md:w-[250px]'}
                            />
                            {errors.lastName && touched.lastName ? (
                                <div className="text-red-500">{errors.lastName}</div>
                            ) : null}
                        </section>

                        <section className={'flex-col order-4 gap-5 p-[15px]'}>
                            <p className={'text-sm md:text-2xl font-thin'}>Gender</p>
                            <Field
                                as={'select'}
                                name={'gender'}
                                className={'text-sm md:text-2xl border-2 border-black font-thin px-[5px] py-[2px] rounded w-[80%] md:w-[250px]'}
                            >
                                <option value="" label="Select Gender" />
                                <option value="MALE" label="MALE" />
                                <option value="FEMALE" label="FEMALE" />
                            </Field>
                            {errors.gender && touched.gender ? (
                                <div className="text-red-500">{errors.gender}</div>
                            ) : null}
                        </section>

                        <section className={'flex-col order-6 gap-5 p-[15px]'}>
                            <div className={'flex flex-col'}>
                                <label className={'text-sm md:text-2xl font-thin'}>Date of Birth</label>
                                <Field
                                    name="dateOfBirth"
                                    type="date"
                                    className={'text-sm md:text-2xl border-2 border-black font-thin px-[5px] py-[2px] rounded w-[80%] md:w-[250px]'}
                                    min={getMinDate()}
                                    max={getMaxDate()}
                                />
                                {errors.dateOfBirth && touched.dateOfBirth ? (
                                    <div className="text-red-500">{errors.dateOfBirth}</div>
                                ) : null}
                            </div>
                        </section>

                        <section className={'flex-col order-8 gap-5 p-[15px]'}>
                            <button
                                type="submit"
                                className="bg-green-400 text-white rounded w-[40%] h-[30px] hover:bg-green-600"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <Icon icon="eos-icons:loading" width="1.2rem" height="1.2rem" style={{ color: 'black' }} />
                                ) : (
                                    <p>Submit</p>
                                )}
                            </button>
                        </section>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
