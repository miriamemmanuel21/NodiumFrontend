import {Formik,Field, Form} from 'formik';
import * as Yup from 'yup';
import React from "react";
import styles from '../../index.module.css';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactInformation(){
    const validator = Yup.object().shape({
         street: Yup.string()
            .matches(/^[A-Za-z0-9\s.,'-]+(?:\s+(?:Street|St|Avenue|Ave|Boulevard|Blvd|Road|Rd|Lane|Ln|Drive|Dr|Court|Ct|Place|Pl|Square|Sq|Way|Terrace|Ter))?\.?$/, 'Invalid street name')
            .required('Street name is required'),
        state: Yup.string()
            .required('State is required')
            .min(2, 'State must be at least 2 characters long'),
        nationality: Yup.string()
            .required('Nationality is required')
            .min(2, 'Nationality must be at least 2 characters long'),
        phoneNumber: Yup.string()
            .required('Phone number is required')
            .matches(/^\+?[0-9]{10,14}$/, 'Phone number must be numeric')

    });

    const handleSubmit =async (values)=>{
        values.preventDefault();
        const base_url = localStorage.getItem('');
        const token = localStorage.getItem('token');
        let response;
        try{
             response = await fetch(`${base_url}/api/v1/users/update-address`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: localStorage.getItem('email'),
                    state: values.state,
                    street: values.street,
                    phoneNumber: values.phoneNumber,
                    nationality: values.nationality,
                })
            })
                response = await response.json();
                console.log(response.data);
                if(response.ok){
                    toast.success('Contacts updated successfully',{
                        position: "top-right",
                        pauseOnHover:true,
                        autoClose:5000,
                        progress:undefined,
                        theme: "dark",
                    })
            }
                else{
                    toast.error('Something went wrong',{
                        position: "top-right",
                        pauseOnHover:true,
                        autoClose:5000,
                        progress:undefined,
                        theme: "dark",
                    })
                    console.log(response);
                }
        }
        catch(error){
            console.log("error", error.message)
            toast.error('Something went wrong',{
                position: "top-right",
                pauseOnHover:true,
                autoClose:5000,
                progress:undefined,
                theme: "dark",
            })
            console.log(response);
        }
    }
    return (
        <div>
            <Formik
                validationSchema={validator}
                initialValues={{
                    street:'',
                    nationality:'',
                    state:'',
                    phoneNumber:''

                }}
                onSubmit={handleSubmit}>
                {({isSubmitting, isValid,
                   touched, errors})=>(
                    <Form className={`${styles.form} md:grid md:grid-cols-2 md:grid-rows-3`}>
                        <section className={`${styles.sectionField} md:order-1`}>
                            <p>Street</p>
                            <Field
                                as="input"
                                name="street"
                                className={'px-[4px] rounded-md border-2 border-black w-[200px]'}
                                placeholder={'10, Nodium avenue'}
                                style={{borderColor: errors.street && touched.street ? "red" : "inherit"}}
                            />
                            {errors.street && touched.street && (
                                <p className="error-message">{errors.street}</p>
                            )}
                        </section>
                        <section className={`${styles.sectionField} md:order-2`}>
                            <p>State</p>
                            <Field
                                as={'input'}
                                name={'state'}
                                className={'px-[4px] rounded-md border-2 border-black w-[200px]'}
                                placeholder={'Nodium State'}
                                style={{borderColor: errors.state && touched.state ? "red" : "inherit"}}
                            />
                            {errors.state && touched.state && (
                                <p className="error-message">{errors.state}</p>
                            )}
                        </section>
                        <section className={`${styles.sectionField} md:order-3`}>
                            <p>Nationality</p>
                            <Field
                                as={'input'}
                                name={'nationality'}
                                className={'px-[4px] rounded-md border-2 border-black w-[200px]'}
                                placeholder={'Nationality'}
                                style={{borderColor: errors.nationality && touched.nationality ? "red" : "inherit"}}
                            />
                            {errors.nationality && touched.nationality && (
                                <p className="error-message">{errors.nationality}</p>
                            )}
                        </section>
                        <section className={`${styles.sectionField} md:order-4`}>
                            <p>PhoneNumber</p>
                            <Field
                                as={'input'}
                                name={'phoneNumber'}
                                className={'px-[4px] rounded-md border-2 border-black w-[200px]'}
                                placeholder={'+120**********'}
                                style={{borderColor: errors.phoneNumber && touched.phoneNumber ? "red" : "inherit"}}
                            />
                            {errors.phoneNumber && touched.phoneNumber && (
                                <p className="error-message">{errors.phoneNumber}</p>
                            )}
                        </section>
                        <div className="md:col-span-2 flex justify-center items-center order-5">
                            <button type={"submit"} disabled={!isValid}
                                className="font-medium text-white bg-green-500 px-[10px] py-1 md:w-[20%] hover:bg-green-600 rounded-md">
                                Submit
                            </button>
                        </div>
                    </Form>
                    )}
            </Formik>
            <ToastContainer/>
        </div>
    )
}