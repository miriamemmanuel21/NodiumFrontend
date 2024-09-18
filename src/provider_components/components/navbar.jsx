import Image from '../../../src/assets/nodium.png';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import Hamburger from 'hamburger-react'
import {Icon} from '@iconify/react';
export default function ProviderNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const email = localStorage.getItem('email');

    const Overlay = () => {
        return (
            <div
                className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            ></div>
        );
    };

    const Display = () => {
        return (
            <div className="flex flex-col fixed top-0 left-0 w-[300px] h-full bg-gray-100 shadow-lg z-10
             transform  duration-500 justify-between inset-0 bg-opacity-50 transition-all
               ease-in-out backdrop-blur-xl ">
                <div>
                    <button  className={'hover:pointer p-3 border-black hover:p-[0.6rem] hover:border-2'}>
                        <Icon icon="radix-icons:cross-1"
                              onClick={()=>setMenuOpen(!menuOpen)} width="2rem" height="2rem" />
                    </button>
                    <ul className="mt-4">
                        <li className="py-2 hover:text-green-500 hover:bg-gray-600 pl-[10px] hover:font-bold hover:text-lg"
                            onClick={() => {email?navigate('/employers'):
                                toast.error("Login first", {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });}}>
                            Home</li>
                        <li className="py-2 hover:text-green-500 hover:bg-gray-600 pl-[10px] hover:font-bold hover:text-lg"
                              onClick={() => {email?navigate('/jobs'):
                                toast.error("Login first", {
                                position: "top-center",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined})
                              ;}}>Browse Jobs</li>
                        <li className="py-2 hover:text-green-500 hover:bg-gray-600 pl-[10px] hover:font-bold hover:text-lg"
                            onClick={() => {email?navigate('/employers'):
                                toast.error("Login first", {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            }}>Employers</li>
                        <li className="py-2 hover:text-green-500 hover:bg-gray-600 pl-[10px] hover:font-bold hover:text-lg"
                            onClick={() => {email ? navigate('/dashboard'):
                                toast.error("Login first", {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                })
                            }}>Profile</li>
                        <li className="py-2 hover:text-green-500 hover:bg-gray-600 pl-[10px] hover:font-bold hover:text-lg"
                            onClick={() => {email?navigate('/contact'):
                                toast.error("Login first", {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                })}}
                        >Contact</li>
                    </ul>
                </div>
                <div>
                    {email?
                        <li className={'py-[5px] text-white list-none mb-[1rem] bg-green-600 text-center text-md font-bold hover:text-red-300 '}
                            onClick={() => navigate('/logout')}>
                            Log out
                        </li> :
                        <li className={'py-[5px] text-white list-none mb-[1rem] bg-green-600 text-center text-md font-bold hover:font-bold hover:text-black '}
                            onClick={() => navigate('/login')}>
                            Login
                        </li>
                    }
                </div>
            </div>
        );
    };
    const logout = async () => {
        const password = localStorage.getItem('password');
        const response = await fetch('https://nodium-latest.onrender.com/api/v1/nodium/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });

        if (response.status === 200) {
            toast.success("Logged out successfully.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate('/login');
        } else {
            toast.error("Something went wrong.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    const   DisplayPanel =()=>{
        return <div>
                   {menuOpen && <Display />}
               </div>
    }
    const List = () => {
        const pack = [
            ['Home', '/home'],
            ['Browse Jobs', '/jobs'],
            ['Employers', '/employers'],
            ['Profile', '/profile'],
            ['Contact', '/contact']
        ];
        return (
            <div className="hidden lg:flex gap-12 mt-[5px] ml-[-20vw]">
                {pack.map(([label, path], index) => (
                    <div key={index} className="flex items-center gap-3">
                        <p className="font-bold text-sm text-md hover:text-green-400"
                           onClick={() => navigate(path)}>{label}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
            <div className={`px-[4vw] flex justify-center bg-white py-[1vw]`}>
                <div className="flex flex-grow gap-4">
                    <img src={Image} className="mt-[4px] h-[30px] w-[30px] md:h-[45px] md:w-[45px]"  alt="logo" />
                    <p className="mt-[2vw] sm:mt-[0.5vw] text-md font-bold sm:text-3xl">Nodium</p>
                </div>
                <div className="flex flex-grow justify-center">
                    <List />
                </div>
                <div onClick={() => setMenuOpen(!menuOpen)} className={'flex md:hidden'}>
                    {menuOpen ? <DisplayPanel/> :
                        <Hamburger toggle={setMenuOpen} toggled={menuOpen}
                                   onToggle={()=> setMenuOpen(!menuOpen)}/>}
                </div>
                <div className="items-center gap-3 ml-auto hidden md:flex">
                    {email ? (
                        <div className={'flex gap-5'}>
                            <button onClick={() => logout()}
                                    className="lg:p-[8px] text-md font-bold border-[1px] rounded-[4px]">
                                Log out
                            </button>
                            <button onClick={() => navigate('/addjob')}
                                    className="lg:p-[8px] text-md font-bold border-[1px] rounded-[4px]">
                                Add Job
                            </button>
                        </div>
                    ) : (
                        <div className={'flex gap-5'}>
                            <button onClick={() => navigate('/login')}
                                    className="lg:p-[8px] text-lg font-bold border-[1px] rounded-[4px]
                                hover:bg-green-500 transition-transform hover:text-white duration-1000 ease-in-out">
                                Sign in
                            </button>
                            <button onClick={() => navigate('/login')}
                                    className="lg:p-[8px] text-xl font-bold border-[2px] border-black rounded-[4px] bg-green-400">
                                Add Job
                            </button>
                        </div>
                    )}
                    <div className="lg:hidden flex items-center">
                        <div onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen && <Overlay/>}
                            {menuOpen ? <DisplayPanel/> :
                                <Hamburger toggle={setMenuOpen} toggled={menuOpen}
                                           onToggle={()=> setMenuOpen(!menuOpen)}/>}
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
    );
}
