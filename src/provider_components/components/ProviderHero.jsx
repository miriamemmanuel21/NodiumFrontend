import ProviderNavbar from "./navbar";
import {Field, Form, Formik} from "formik";
import Image from '../../assets/developer.jpeg'
import {Icon} from "@iconify/react";
import {toast} from "react-toastify";
import MidBody from "./provider_hero_bottom";
import Footer from "./footer";
export default function Hero(){
    const submit = async (e)=>{
        try{
            console.log(e.target.value);
            const response = await fetch(`https://nodium-latest.onrender.com/api/v1/nodium/search/${e.target.value}`,
                {
                    method:'GET',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        search:e.target.search.value
                    })
                });
            if(response.status === 200 ){
                toast.success("Logged out successfully.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
             else{
                 throw new Error("Something went wrong")
            }}
        catch (error){
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
    }
    return(
        <div className={`flex flex-col`}>
            <ProviderNavbar/>
           <div className={'block lg:flex bg-green-700'}>
               <div className={'py-[20vh]'}>
                   <div className={'px-[5vw] lg:px-[10vw] flex flex-col justify-center items-center gap-10'}>
                       <p className={'font-extrabold text-3xl lg:text-7xl text-white'}> Unlock Your Dream path with Nodium</p>
                       <p className={'text-white font-semibold text-sm'}>
                           Looking for a new job can be both exciting and daunting.
                           Navigating the job market involves exploring various
                           avenues, including online job boards.
                       </p>
                       <p className={'flex flex-col justify-start bg-white rounded-[5px]'}>
                         <Formik initialValues={{search:''}} onSubmit={submit}>
                             {({values, errors,
                                   handleChange,handleBlur
                                   ,touched}) => (
                                   <Form className={'flex flex-row'}>
                                       <Field
                                           className='px-[4vw] sm:w-[40vw]  xl:w-[35vw]
                                         xl:py-[1vw] lg:px-[2vw] lg:w-[25vw] lg:py-[0.7vw]
                                          py-[3vw] s sm:py-[20px] rounded-[10px]'
                                           placeholder='Find jobs here'
                                           type='text'
                                           name='text'
                                           onBlur={handleBlur}
                                           onChange={handleChange}
                                           values={values.search}
                                           style={{borderColor: errors.search && touched.search ? 'red' : 'inherit',}}
                                       />
                                       <div className={'hover:bg-gray-500 pt-[10px]'}>
                                           <Icon icon="fluent:search-20-regular" width="40px" height="40px" onClick={submit} />
                                       </div>
                                   </Form>
                                 )}
                         </Formik>
                       </p>
                   </div>
               </div>
               <div className={`hover:transition-transform ease-in-out border-3xl lg:pb-[20vh]`}>
                   <img src={Image} alt={''} className={`rounded-2xl w-[70vw] mx-[15vw] lg:mt-[120px] 
                   lg:ml-[-5vw] lg:h-[35vw] h-auto mb-[20vw] lg:mb-0`}/>
               </div>
           </div>
            <MidBody/>
            <Footer/>
        </div>
    )
}