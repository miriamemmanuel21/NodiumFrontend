import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import styles from '../../index.module.css';


export default function SignupForm() {
    const baseURL = "https://api.render.com/v1/services/rnd_uIdV51UuTUWN6TK22Byaj4fZ0bwA/deploys";
    localStorage.setItem("base_url",baseURL);

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

    let result;
    const Navigate = useNavigate();
    const [isClicked, setClicked] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [initial_values, setInitialValue] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        lastname: '',
        role: '',
    });

    const handleSubmit = async (values) => {
        setClicked(true);
        setInitialValue(values);

        try {
            const data = JSON.stringify({
                email: values.email,
                password: values.password,
                firstname: values.firstname,
                lastname: values.lastname,
            });
            console.log(data);
            const response = await fetch(
                userRole === 'Service Provider' ?
                    `${baseURL}/api/v1/nodium/providers/register` :
                    `${baseURL}/api/v1/nodium/users/register`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: data,
                }
            );

            result = await response.json();
            let login;
            if (response.ok) {
                console.log("About want to login")
                try {
                    console.log(result.data.email,);
                    login = await fetch(
                        `${baseURL}/api/v1/auth/login`, {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({email: values.email, password:
                                values.password})
                        }
                    );
                    login = await login.json();
                    console.log(login.data.token)
                    const token = login.data.token;
                    localStorage.setItem('token', token);
                    localStorage.setItem('firstname', result.data.firstname);
                    localStorage.setItem('lastname', result.data.lastname);
                    localStorage.setItem('email', result.data.email);
                    localStorage.setItem('role ', login.data.role);
                    localStorage.setItem('id', result.data.id);
                    console.log("persisted user detail successfully")
                    toast.success(`Welcome ${result.data.lastname}`, {
                        position: "top-center",
                        autoClose: 5000,
                        pauseOnHover: true,
                        theme: "dark",
                    });
                    setTimeout(() => {
                            Navigate(login.data.role === "PROVIDER" ? '/provider_dashboard' : '/customer_dashboard')
                        }, 5000);
                    console.log(localStorage.getItem('role'))
                    console.log(localStorage.getItem('email'))
                    console.log(localStorage.getItem('lastname'))
                    console.log(localStorage.getItem('firstname'))
                    console.log(localStorage.getItem('id'))
                    console.log(localStorage.getItem('token'))
                }
                catch (error) {
                    throw new Error(result.Error || "Login failed");
                }
            } else {
                console.log("login response is",login)
                throw new Error(result.Error);
            }
        }
        catch (err) {
            console.error("Error: ", err.message);
            toast.error(`Something went wrong.Try Logging in again`, {
                theme: 'dark',
                autoClose: 5000,
                pauseOnHover: true,
            });
            setClicked(false);
        }
        finally {
            setClicked(false);
            setInitialValue({
                password: '',
                confirmPassword: '',
                firstname: '',
                lastname: '',
            })
        }
    };
    return (
        <div className={`py-20 bg-[#F3F4F6] ${styles.slideIn}`}>
            <div className="flex justify-center items-center h-screen bg-gray-100 lg:py-20">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center mb-2 text-green-500">
                        Nodium
                    </h1>
                    <h2 className="text-xl font-bold text-center mb-3">Sign Up</h2>
                    <Formik
                        initialValues={initial_values}
                        validationSchema={userSchema}
                        onSubmit={handleSubmit}>
                        {({
                              errors,
                              touched,
                              handleChange,
                              values,
                              isValid,
                              handleSubmit,
                          }) => (
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                if (isValid) {
                                    handleSubmit()
                                }
                            }}>
                                <div className="mb-3">
                                    <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="firstname">
                                        First Name
                                    </label>
                                    <Field
                                        type="text"
                                        values={initial_values.firstname}
                                        name="firstname"
                                        placeholder="Enter your first name"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        style={{borderColor: errors.firstname && touched.firstname ? 'red' : 'inherit'}}
                                    />
                                    {errors.firstname && touched.firstname && (
                                        <p className="text-sm text-red-500">{errors.firstname}</p>)}
                                </div>

                                <div className="mb-3">
                                    <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="lastname">
                                        Last Name
                                    </label>
                                    <Field
                                        type="text"
                                        name="lastname"
                                        values={initial_values.lastname}
                                        placeholder="Enter your last name"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        style={{borderColor: errors.lastname && touched.lastname ? 'red' : 'inherit'}}
                                    />
                                    {errors.lastname && touched.lastname && (
                                        <p className="text-sm text-red-500">{errors.lastname}</p>)}
                                </div>

                                <div className="mb-3">
                                    <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        style={{borderColor: errors.email && touched.email ? 'red' : 'inherit'}}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="text-sm text-red-500">{errors.email}</p>)}
                                </div>

                                <div className="mb-3">
                                    <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <Field
                                        type='password'
                                        name="password"
                                        placeholder="Enter your password"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        style={{borderColor: errors.password && touched.password ? 'red' : 'inherit'}}
                                    />
                                    {errors.password && touched.password && (
                                        <p className="text-sm text-red-500">{errors.password}</p>)}
                                </div>

                                <div className="mb-3">
                                    <label className="block text-gray-700 text-xs font-bold mb-2"
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
                                        <p className="text-xs text-red-500">{errors.confirmPassword}</p>
                                    )}
                                </div>

                                <div className="mb-3">
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
                                        <option value="" disabled hidden >Select what you are signing up as</option>
                                        <option value="Service Provider">SERVICE PROVIDER</option>
                                        <option value="Customer">CUSTOMER</option>
                                    </Field>
                                </div>

                                <div className="flex items-center justify-between w-full">
                                    <button
                                        type="submit"
                                        className={`${isClicked ? 'py-[10px] justify-center items-center flex' : ''} w-full bg-green-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        disabled={!isValid || !isClicked}
                                    >
                                        {isClicked && isValid ? (
                                            <Icon icon="eos-icons:bubble-loading" width={30} height={30}
                                                  style={{color: 'black'}}/>
                                        ) : (
                                            <p>Sign Up</p>
                                        )}
                                    </button>
                                </div>
                                <p onClick={() => Navigate('/login')}
                                   className={`pt-4 cursor-pointer text-center ${styles.underline} hover:text-black text-green-500`}>
                                    Already Have An account
                                </p>
                            </Form>)
                        }
                    </Formik>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    )
}
