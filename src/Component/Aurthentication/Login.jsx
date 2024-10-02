import {Field, Form, Formik} from "formik";
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '../../index.module.css';
import * as Yup from 'yup';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Icon} from "@iconify/react";
export default function LoginComponent(){
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [isVisible , setVisible] = useState(false);
    const validator = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[,/;!#@%^*&(){}~`])/,
                'Password must contain letters, numbers, and special characters')
            .min(8, 'Password must be at least 8 characters long')
            .required('Password is required')
    });
    const signUp = () => {
        navigate('/signUp');
    };
    const forgotPassword = () => {
        navigate('/otpPage');
    };
    const submitForm = async (data, { setSubmitting }) => {
        setLoading(true);
        console.log()
        try {
            const response = await fetch(`http://localhost:8080/api/v1/auth/login`,{
                method: 'POST',
                body: JSON.Stringify(data),
            })
            let login= await  response.json()
            console.log(login.data.token)
            const token = login.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('firstname', login.data.firstname);
            localStorage.setItem('lastname', login.data.lastname);
            localStorage.setItem('email', login.data.email);
            localStorage.setItem('role ', login.data.role);
            localStorage.setItem('id', login.data.id);
            console.log("persisted user detail successfully")
            toast.success(`Welcome ${login.data.lastname}`, {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                theme: "dark",
            });
            setTimeout(() => {
                navigate(login.data.role === "PROVIDER" ? '/provider_dashboard' : '/customer_dashboard')
            }, 5000);
            console.log(localStorage.getItem('role'))
            console.log(localStorage.getItem('email'))
            console.log(localStorage.getItem('lastname'))
            console.log(localStorage.getItem('firstname'))
            console.log(localStorage.getItem('id'))
            console.log(localStorage.getItem('token'))

            if(response.ok) {
                const { role } = response.json().data;
                {role === 'PROVIDER'? navigate('/provider_dashboard'): navigate('/web_developer');}
            }
            else {
                throw new Error('Something went wrong, please try again.');
            }
        } catch (error) {
            toast.error(error.message, {
                theme: 'dark',
                position: 'top-center',
                autoClose: 5000,
                pauseOnHover: true,
            });
        }
        finally {
            setLoading(false);
            setSubmitting(false);
        }
    };
    return (
        <div className={`${styles.slideIn} w-full  flex flex-col justify-center items-center 
                        h-screen backdrop-blur-sm bg-opacity-55 bg-green-100`}>
            <div className={`flex flex-col justify-center items-center drop-shadow-md md:w-[30vw]
                            border-black border backdrop:drop-shadow-2xl p-[20px] rounded-2xl`}>
                <p className={`text-green-600 text-[5vw] md:text-[3vw] font-bold`}>Nodium</p>
                <p>Login</p>
                <Formik
                    onSubmit={submitForm}
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validator}
                >
                    {({ touched, errors, isSubmitting }) => (
                        <Form className={'flex flex-col'}>
                            <div className="mb-4">
                                <p className="block text-gray-700 text-sm font-bold mb-2">Email</p>
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Enter your Email"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    style={{borderColor: errors.email && touched.email ? 'red' : 'inherit'}}
                                />
                                {errors.email && touched.email && (
                                    <p className="text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>
                            <div className="mb-4 relative">
                                <p className="block text-gray-700 text-sm font-bold mb-2">Password</p>
                                <Field
                                    type={`${isVisible ? 'text' : 'password'}`}
                                    name="password"
                                    placeholder="Enter your Password"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                    style={{borderColor: errors.password && touched.password ? 'red' : 'inherit'}}
                                />
                                <span onClick={() => {
                                    setVisible(!isVisible);
                                }}
                                      className="absolute right-3 top-[40px] cursor-pointer">
                                    {isVisible
                                        ? <Icon icon="carbon:view-off" width="1.2rem" height="1.2rem" style={{color: 'black'}}/>
                                        : <Icon icon="ep:view" width="1.2rem" height="1.2rem" style={{color: 'black'}}/>}
                                </span>
                                {errors.password && touched.password && (
                                    <div className="w-full flex justify-center items-center">
                                        <p className="text-xs text-red-500 w-[80%]">{errors.password}</p>
                                    </div>
                                )}
                            </div>
                            <div className={`justify-center items-center flex flex-col `}>
                                <button
                                    type="submit"
                                    className={`py-[5px] px-[10px] w-[200px] rounded bg-green-300 hover:bg-green-600 mx-[20%] flex justify-center items-center`}
                                    disabled={isSubmitting || isLoading}>
                                    {isLoading ? (
                                        <Icon icon="line-md:loading-alt-loop" width="1.2rem" height="1.2rem"
                                              style={{color: 'black'}}/>
                                    ) : (
                                        'Login'
                                    )}
                                </button>

                                <div
                                    className={`flex flex-col justify-items-between ${styles.text} gap-[1vw] mt-[1vw]`}>
                                    <p onClick={forgotPassword}>
                                        forgotten password
                                    </p>
                                    <p onClick={signUp}>
                                        Sign up
                                    </p>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
                <ToastContainer/>
            </div>
        </div>
    );
}