import Image from '../../../src/assets/nodium.png';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function ProviderNavbar() {
    const navigate = useNavigate();
    const email = localStorage.getItem('email');
    const baseURL = localStorage.getItem('base_url')

    const logout = async () => {
        const password = localStorage.getItem('password');
        let response = await fetch(`${baseURL}/api/v1/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });
        response = await response.json();
        if (response.ok) {
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

    return (
            <div className={`px-[4vw] flex justify-center bg-white py-[1vw]`}>
                <div className="flex flex-grow gap-4">
                    <img src={Image} className="mt-[4px] h-[30px] w-[30px] md:h-[45px] md:w-[45px]"  alt="logo" />
                    <p className="mt-[2vw] sm:mt-[0.5vw] text-md font-bold sm:text-3xl">Nodium</p>
                </div>
                <div className="items-center gap-3 ml-auto hidden md:flex">
                    {email ? (
                        <div className={`flex gap-5`}>
                            <button onClick={() => logout()}
                                    className="lg:p-[8px] text-md font-bold border-[1px] rounded-[4px]">
                                Log out
                            </button>
                        </div>
                    ) : (
                        <div className={'flex gap-5'}>
                            <button onClick={() => navigate('/signup')}
                                    className="px-[8px] py-[2px] text-md font-thin border-[1px] rounded-md">
                                Sign in
                            </button>
                        </div>
                    )}
                </div>
                <ToastContainer />
            </div>
    );
}
