// import styles from '../../index.module.css';
// import Layout from '../components/dashboardLayout';
// import {useRef, useState} from "react";
// import ProviderNavbar from "../components/navbar";
// import Hamburger from "hamburger-react";
// import MyDetails from "./my_details";
//
//
// export default function ProviderProfile() {
//     const [isOpen, setIsOpen] = useState(false);
//     const myDetailsRef = useRef(null);
//     const socialLinksRef = useRef(null);
//     const contactInfoRef = useRef(null);
//
//     const handleScrollToSection = (ref) => {
//         if (ref.current) {
//             ref.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };
//     // const [image, setImage] = useState('');
//     // useEffect(()=>{
//     //     const fetchImage= async()=> {
//     //             try{
//     //                 const response = async ()=>{
//     //                     await (await fetch('/api/url/v1/endpoint', {
//     //                         method: 'GET',
//     //                         headers: {'Content-Type': 'application/json'},
//     //                     })).json()
//     //                 }
//     //                 return response.imageURL;
//     //             }
//     //             catch(err){
//     //                 toast('Unable to fetch image', {
//     //                     position: "top-right",
//     //                     autoClose: 5000,
//     //                     hideProgressBar: false,
//     //                     closeOnClick: true,
//     //                     pauseOnHover: true,
//     //                     draggable: true,
//     //                     progress: undefined,
//     //                     theme: "light"
//     //                 })
//     //             }
//     //         }
//     //         setImage(fetchImage())
//     //     }
//     //     ,[])
//     //
//     // const MyDetails= ()=>{
//     //     let imageLinks= image
//     //     return (
//     //         <div className={'flex '}>
//     //             {imageLinks ?
//     //                 <img alt={''} src={imageLinks}/>
//     //                 : <p>Error loading image</p>
//     //             }
//     //             <div>
//     //
//     //             </div>
//     //         </div>
//     //     )
//     // }
//     // const Component=()=>{
//     //     return (
//     //         <div>
//     //             <ul className={'flex gap-4'}>
//     //                 <li className={'list-none text-bold hover:bg-gray-200 p-[10px] rounded-md'}>My Details</li>
//     //                 <li className={'list-none text-bold hover:bg-gray-200 p-[10px] rounded-md'}>Social links</li>
//     //                 <li className={'list-none text-bold hover:bg-gray-200 p-[10px] rounded-md'}>Contact Information</li>
//     //             </ul>
//     //
//     //         </div>
//     //     )
//     // }
//     // return (
//     //     <div className={`${styles.background}`}>
//     //         <ProviderNavbar/>
//     //         <div className={'flex flex-col md:flex-row'}>
//     //             <div className={``}>
//     //                 {isOpen?
//     //                     <div className={'flex-col '}>
//     //                         <Icon icon="iconoir:cancel" width="1.2rem" height="1.2rem"
//     //                            onClick={()=>setIsOpen(!isOpen)}  style={{color: 'black'}}/>
//     //                         <Layout props={1}/>
//     //                     </div>
//     //                     :
//     //                     <div className={`${isOpen?'hidden':'flex'}`}>
//     //                         <p className={'text-md font-thin'}>SideBar</p>
//     //                     </div>
//     //                 }
//     //             </div>
//     //             <div>
//     //                 <Layout props={1}/>
//     //                 <Component/>
//     //             </div>
//     //             <div className={'flex'}>
//     //                 <Icon icon="iconoir:cancel" width="1.2rem" height="1.2rem"  style={{color: 'black'}} />
//     //                 <p>Sidebar</p>
//     //             </div>
//     //         </div>
//     //     </div>
//     //
//     // )
//
//
//     return (
//         <div className={`${styles.background}`}>
//             <ProviderNavbar/>
//             <div className={'flex-col md:flex gap-10'}>
//                 <div className={'flex md:hidden gap-8'}>
//                     <Hamburger className={`flex md:hidden`} toggle={setIsOpen} toggled={isOpen}/>
//                     <p className={'text-lg font-bold pt-[6px]'}>Side bar</p>
//                 </div>
//                 <div className={'hidden md:flex gap-8'}>
//                     <Layout props={1}/>
//                 </div>
//                 <div className={'bg-white px-6 py-3 flex-col md:flex-row'}>
//                     {
//                         isOpen ? (
//                             <div className={`${isOpen ? 'flex' : 'hidden'} md:flex`}>
//                                 <Layout props={1}/>
//                             </div>
//                         ) : null
//                     }
//                 </div>
//                 <div className={`bg-white`}>
//                     <ul className={`flex gap-4`}>
//                         <li className={'list-none font-thin p-[10px] text-xl hover:bg-gray-300 rounded-2xl'}
//                         onClick={() => handleScrollToSection(myDetailsRef)}>
//                             My Details</li>
//                         <li className={'list-none font-thin text-xl p-[10px] hover:bg-gray-300 rounded-2xl'}
//                            onClick={() => handleScrollToSection(myDetailsRef)}>
//                             Social Links
//                         </li>
//                         <li className={'list-none font-thin text-xl p-[10px] hover:bg-gray-300 rounded-2xl'}
//                         onClick={()=>{handleScrollToSection(contactInfoRef)}}>
//                             Contact Information</li>
//                     </ul>
//                     <div className={'gap-8'}>
//                         <div ref={myDetailsRef}>
//                             <MyDetails/>
//                         </div>
//                         <div ref={socialLinksRef}>
//                         </div>
//                         <div ref={contactInfoRef}>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import styles from '../../index.module.css';
import Layout from '../components/dashboardLayout';
import {useRef, useState} from "react";
import ProviderNavbar from "../components/navbar";
import Hamburger from "hamburger-react";
import MyDetails from "./my_details";


function GetElementsHeaders(handleScrollToSection, myDetailsRef, socialLinksRef, contactInfoRef) {
    return <ul className={`flex gap-4 bg-white`}>
        <li className={'text-sm list-none font-thin p-[10px] md:text-xl hover:bg-gray-300 rounded-2xl text-center'}
            onClick={() => handleScrollToSection(myDetailsRef)}>
            My Details
        </li>
        <li className={'text-sm list-none font-thin p-[10px] md:text-xl hover:bg-gray-300 rounded-2xl text-center'}
            onClick={() => handleScrollToSection(socialLinksRef)}>
            Social Links
        </li>
        <li className={'text-sm list-none font-thin p-[10px] md:text-xl hover:bg-gray-300 rounded-2xl text-center'}
            onClick={() => handleScrollToSection(contactInfoRef)}>
            Contact Information
        </li>
    </ul>;
}

export default function ProviderProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const myDetailsRef = useRef(null);
    const socialLinksRef = useRef(null);
    const contactInfoRef = useRef(null);

    const handleScrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${styles.background}`}>
            <ProviderNavbar/>
            <div className={'flex-col md:flex md:flex-row'}>

                <div className={'flex md:hidden gap-8'}>
                    <Hamburger className={`flex md:hidden`} toggle={setIsOpen} toggled={isOpen}/>
                    <p className={'text-lg font-bold pt-[6px]'}>Side bar</p>
                </div>

                <div className={`hidden md:flex md:flex-col gap-8`}>
                    <div className={`h-screen overflow-y-auto`}>
                        <Layout props={1}/>
                    </div>
                </div>

                {isOpen && (
                    <div className={`fixed top-0 left-0 z-20 w-full bg-white md:hidden`}>
                        <div className={`flex-col h-screen overflow-y-auto`}>
                            <ProviderNavbar/>
                            <div>
                                <p className={'text-sm font-thin pt-[6px]'}>Side bar</p>
                            </div>
                            <Layout props={1}/>
                        </div>
                    </div>
                )}

                <div className={`bg-white flex-1 px-6 ${styles.background}`}>
                    {GetElementsHeaders(handleScrollToSection, myDetailsRef, socialLinksRef, contactInfoRef)}
                    <div className={`md:p-[30px]`}>
                        <div ref={myDetailsRef} className={'py-5 bg-white'}>
                            <MyDetails/>
                        </div>
                        <div ref={socialLinksRef} className={'mb-8'}>
                        </div>
                        <div ref={contactInfoRef}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
