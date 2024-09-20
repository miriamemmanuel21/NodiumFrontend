import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Icon } from '@iconify/react';
import { toast,ToastContainer } from 'react-toastify';
import {useNavigate} from "react-router-dom";
import styles from '../../index.module.css'

export default function SignupForm (){
    let userSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[,/;!#@%^*&(){}~`])/,
                'Password must contain letters, numbers, and special characters')
            .min(8, 'Password must be at least 8 characters long')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
        firstname: Yup.string()
            .matches(/^[a-zA-Z]{2,}/, 'Invalid firstname provided')
            .required('First name is required'),
        lastname: Yup.string()
            .matches(/^[a-zA-Z]{2,}/, 'Invalid lastname provided')
            .required('Last name is required'),
    });
    const Navigate = useNavigate();
    const [isClicked, setClicked] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [error, setError] = useState('');
    const [color, setColor] = useState('#1dbf73');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleSubmit = async (values) => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/v1/nodium/${userRole === 'Service Provider' ? 'providers' : 'users'}/register`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                }
            );
            console.log(response);
            if (response.status === 200) {
                toast.success('Registration Successful',{
                    position:"top-center",
                    autoClose:5000,
                    isLoading:true,
                    pauseOnHover:true,
                    theme:"dark"
                });
                values.role==='Service Provider'? Navigate('/provider_dashboard ') : Navigate('/webdeveloper');
            }
        } catch (error) {
            setError('Error submitting form: ' + error.message);
            setClicked(false);
        }
    };

    return (
        <div className={`py-20 bg-[#F3F4F6] ${styles.slider}`}>
            <div className="flex justify-center items-center h-screen bg-gray-100 lg:py-20 ">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center mb-2 text-green-500" >
                        Nodium
                    </h1>
                    <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                    <Formik
                        initialValues={{
                            email: '',password: '',confirmPassword: '',
                            firstname: '',lastname: '', role: '',
                        }}
                        validationSchema={userSchema}
                        onSubmit={handleSubmit}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                          }) => (
                            <Form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                                        First Name
                                    </label>
                                    <Field
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="firstname"
                                        placeholder="Enter your first name"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        style={{borderColor: errors.firstname && touched.firstname ? 'red' : 'inherit'}}
                                    />
                                    {errors.firstname && touched.firstname && (<p className={'text-sm'}>{errors.firstname}</p>)}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                                        Last Name
                                    </label>
                                    <Field
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="lastname"
                                        placeholder="Enter your last name"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        style={{borderColor: errors.lastname && touched.lastname ? 'red' : 'inherit'}}
                                    />
                                    {errors.lastname && touched.lastname && (<p className={'text-sm'}>{errors.lastname}</p>)}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        style={{borderColor: errors.email && touched.email ? 'red' : 'inherit'}}
                                    />
                                    {errors.email && touched.email && (<p className={'text-sm'}>{errors.email}</p>)}
                                </div>

                                <div className="mb-4 relative">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <Field
                                        type={passwordVisible ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Enter your password"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        style={{borderColor: errors.password && touched.password ? 'red' : 'inherit'}}
                                    />
                                    {errors.password && touched.password && (<p className={'text-sm'}>{errors.password}</p>)}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2"
                                           htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <Field
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        style={{borderColor: errors.confirmPassword && touched.confirmPassword ? 'red' : 'inherit'}}
                                    />
                                    {errors.confirmPassword && touched.confirmPassword && (
                                        <p className={'text-sm'}>{errors.confirmPassword}</p>
                                    )}
                                </div>

                                <div className="mb-1">
                                    <Field
                                        as="select"
                                        name="role"
                                        required
                                        className="mb-10 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => {
                                            handleChange(e);
                                            setUserRole(e.target.value);
                                        }}
                                    >
                                        <option value="" disabled hidden>Select what you are signing up as</option>
                                        <option value="Service Provider">SERVICE PROVIDER</option>
                                        <option value="Customer">CUSTOMER</option>
                                    </Field>
                                </div>

                                <div className="flex items-center justify-between w-full">
                                    <button
                                        type="submit"
                                        className={`${isClicked ? 'py-[10px]' : ''} w-full bg-green-400 text-white font-bold py-2 px-4 rounded-lg
                                         hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    >
                                        {isClicked ? (
                                            <Icon icon="eos-icons:bubble-loading" width={40} height={40}
                                                  style={{color: 'black'}}/>
                                        ) : (
                                            'Sign Up'
                                        )}
                                    </button>
                                </div>
                                <p onClick={()=>{Navigate('/login')}} className={`pt-4 cursor-pointer text-center ${styles.underline} hover:text-black text-green-500`}>
                                    Already Have An Account
                                </p>
                            </Form>
                        )}
                    </Formik>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
}