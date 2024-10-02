import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Icon } from "@iconify/react";
import { useState } from "react";

export const getMaxDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date.toISOString().split("T")[0];
};

export const getMinDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 60);
    return date.toISOString().split("T")[0];
};

export const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageUpload"
            />
            <label
                htmlFor="imageUpload"
                className={`rounded-md flex justify-center items-center w-[200px] md:w-[300px] 
                h-[150px] border-2 border-dashed border-gray-400 cursor-pointer 
                ${!selectedImage ? 'bg-gray-100' : ''}`}
            >
                {selectedImage ? (
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-full object-cover rounded-md"
                    />
                ) : (
                    <p className="text-center text-gray-500">Click to add image</p>
                )}
            </label>
        </div>
    );
};

export default function MyDetails() {
    const validationSchema = Yup.object({
        gender: Yup.string()
            .matches(/^(MALE|FEMALE)$/, 'Gender must be either MALE or FEMALE')
            .required('Gender is required'),
        dateOfBirth: Yup.date()
            .min(getMinDate(), `You must be younger than 60 years old`)
            .max(getMaxDate(), 'You must be at least 18 years old')
            .required('Date of Birth is required'),
    });

    const baseURL = localStorage.getItem("base_url");

    function handleSubmit() {
        return async (values, {setSubmitting}) => {
            try {
                console.log(values);
                const response = await fetch(`${baseURL}/api/v1/users/submit_details/${localStorage.getItem("id")}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (!response.ok) {
                    throw new Error('Something went wrong try again later');
                }

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setSubmitting(false);
            }
        };
    }

    return (
        <div>
            <Formik
                initialValues={{ gender: '', dateOfBirth: '' , image: null}}
                validationSchema={validationSchema}
                onSubmit={  handleSubmit()}>
                {({ isSubmitting, errors,
                      touched, isValid }) => (
                    <Form className="flex flex-col">
                        <div className="flex flex-col md:flex-row justify-center md:justify-around">
                            <div className="items-center flex justify-center flex-col">
                                <ImageUpload />
                            </div>
                            <div className="flex gap-10 flex-col  md:justify-center md:items-center
                                            justify-center items-center">
                                <section className="flex-col gap-5 p-[15px]">
                                    <p className="text-sm md:text-lg font-thin">Gender</p>
                                    <Field
                                        as="select"
                                        name="gender"
                                        className="text-sm md:text-lg border-2 border-black font-thin px-[5px]
                                        rounded w-[200px]"
                                    >
                                        <option value="" label="Select Gender" />
                                        <option value="MALE" label="MALE" />
                                        <option value="FEMALE" label="FEMALE" />
                                    </Field>
                                    {errors.gender && touched.gender ? (
                                        <div className="text-red-500 text-xs">{errors.gender}</div>
                                    ) : null}
                                </section>

                                <section className="flex-col gap-[20px] md:gap-5 p-[15px] mt-[-50px] md:mt-0">
                                    <div className="flex flex-col ">
                                        <label className="text-sm md:text-lg font-thin mb-[10px]">Date of Birth</label>
                                        <Field
                                            name="dateOfBirth"
                                            type="date"
                                            className="text-sm md:text-lg border-2 border-black font-thin px-[5px]
                                           rounded w-[200px]"
                                            min={getMinDate()}
                                            max={getMaxDate()}
                                        />
                                        {errors.dateOfBirth && touched.dateOfBirth ? (
                                            <div className="text-red-500 text-xs">{errors.dateOfBirth}</div>
                                        ) : null}
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className={'flex justify-center items-center'}>
                            <button
                                type="submit" disabled={isSubmitting || !isValid}
                                className="bg-green-400 text-white rounded py-[3px] ml-[6%]
                             text-center w-[80px] hover:bg-green-600">
                                {isSubmitting ? (
                                    <Icon icon="eos-icons:loading" width="1.2rem" height="1.2rem"
                                          style={{color: 'black'}}/>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
}
