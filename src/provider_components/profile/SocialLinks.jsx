import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";

export default function SocialLinks() {
    const handleSubmit = (values, { setSubmitting }) => {
        console.log("Form submitted with values:", values);
        setSubmitting(false); // Reset form submission state
    };

    const validator = Yup.object().shape({
        linked: Yup.string().matches(
            /^https:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/,
            "Invalid LinkedIn URL"
        ),
        github: Yup.string()
            .matches(/^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/,
            "Invalid GitHub URL"
        ),
    });

    return (
        <div>
            <Formik
                initialValues={{ linked: "", github: "" }}
                onSubmit={handleSubmit}
                validationSchema={validator}
            >
                {({ isSubmitting, isValid, errors, touched }) => (
                    <Form>
                        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 w-[120px]">
                            <div className={`p-3`}>
                                <div className="flex gap-10 flex-col md:flex-row md:justify-center md:items-center ">
                                    <section>
                                        <p className="text-sm md:text-lg font-thin">LinkedIn</p>
                                        <Field
                                            as="input"
                                            name="linked"
                                            placeholder="Your LinkedIn profile Link"
                                            className="text-sm md:text-lg w-[200px] md:w-[300px] border-2 border-black font-thin px-[5px] rounded"
                                            style={{
                                                borderColor:
                                                    errors.linked && touched.linked ? "red" : "inherit",
                                            }}
                                        />
                                        {errors.linked && touched.linked && (
                                            <p className="text-xs text-red-500">{errors.linked}</p>
                                        )}
                                    </section>

                                    <section>
                                        <p className="ml-[10px] text-sm md:text-lg font-thin">Github</p>
                                        <Field
                                            as="input"
                                            name="github"
                                            placeholder="Your GitHub Link"
                                            className="text-sm md:text-lg w-[200px] md:w-[300px] border-2 border-black font-thin px-[5px] rounded"
                                            style={{
                                                borderColor:
                                                    errors.github && touched.github ? "red" : "inherit",
                                            }}
                                        />
                                        {errors.github && touched.github && (
                                            <p className="text-xs text-red-500">{errors.github}</p>
                                        )}
                                    </section>
                                </div>
                            </div>
                        </div>

                        <div className={`p-3`}>
                            <button className="rounded-md text-white bg-gray-600 hover:bg-gray-900 hidden">
                                Add more
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting || !isValid}
                                className="px-[15px] py-[2px] rounded-md text-white bg-green-400"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
