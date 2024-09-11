import React from 'react';
import Image1 from '../../assets/Tech_savvy.jpeg'
import Build from '../../assets/khata.svg';
import Create from  '../../assets/create.svg';
import Apply from '../../assets/apply.svg'
import {Icon} from "@iconify/react";
import {useNavigate} from "react-router-dom";
export default function MidBody() {
    const navigate = useNavigate
    const ListBody =()=>{
        const pack = [
            ['Create a Free Account','Create an Account that helps you Unlock your path way your dream job.', Create],
            ['Build Your Resume','With Nodium You can build and make you resume ammazing.',Build],
            ['Build for Jobs','With Nodium You can get In touch with your Dream job',Apply]
        ]
        return (
            <div className={'flex flex-col justify-center items-center'}>
                {pack.map(([header,middle,images])=>(
                    <div className={'flex py-[20px] gap-3 border-[1px] my-[5px] px-[20px] rounded-2xl hover:bg-gray-200' +
                        'transition-transform transform hover:scale-105'}>
                        <div className={'py-[30px] bg-gray-200 px-[5px] rounded-[10px]'}>
                            <img src={images} height={60} width={60} alt=""/>
                        </div>
                        <div className={'block gap-5 py-[10px]'}>
                            <p className={'font-semibold text-lg text-green-600'}>{header}</p>
                            <p className={'w-[70vw] lg:w-[40vw]'}>{middle}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        )

    }
    return (
        <div className="flex flex-col pt-[60px]">
            <div className="flex flex-col justify-center items-center">
                <p className={'text-2xl md:text-5xl  font-semibold text-green-600'}>
                    Browse Job Category
                </p>
                <p className={'text-lg md:text-3xl font-thin md:font-thin text-center'}>
                    Looking for your next career opportunity. Look no further
                </p>
            </div>
            <div className={'py-[40px] flex flex-col lg:flex-row lg:gap-[5vw] pt-[15vh] justify-center items-center'}>
                <div className={`flex w-[250px] md:w-[400px] overflow-hidden rounded-t-[160px] justify-center items-center`}>
                    <img src={Image1}  className={'transition-transform transform hover:scale-105'} alt=""/>
                </div>
                <div className={'pt-[30px] lg:px-0'}>
                    <div className={'flex flex-col justify-center items-center lg:mt-[-10px] lg:pb-[40px]'}>
                        <p className={'font-bold text-sm md:text-2xl lg:text-4xl text-green-600'}>
                            How Nodium works</p>
                        <p className={'font-md text-gray-500 lg:text-xl text-center'}>
                            From entry-level positions to executive roles browse through.
                        </p>
                    </div>
                    <div >
                        <ListBody/>
                    </div>
                </div>
            </div>
            <div className={'bg-green-600 py-[4vw] flex flex-col md:flex-row md:justify-between px-[3vw] '}>
                <div className={''}>
                    <p className={'text-2xl md:text-5xl font-semibold text-white'}>
                        Featured Jobs
                    </p>
                    <p className={'font-semibold text-white'}>
                        From entry-level positions to executive roles browse through.
                    </p>
                </div>
                <div className={'flex gap-1 hover:pointer items-end pt-[3vw] md:pt-0'}>
                    <p className={'text-white font-thin hover:text-gray-400'}>View All Jobs</p>
                    <div onClick={()=> navigate('/')}>
                        <Icon icon="solar:arrow-right-linear" width={30} height={30}  style={{color: 'white'}}
                              className="pt-[5px] hover:text-gray-200"/>
                    </div>
                </div>
            </div>
        </div>
    );
}