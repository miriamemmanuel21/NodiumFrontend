import React from 'react';
import Image1 from '../../assets/Tech_savvy.jpeg'
import Build from '../../assets/khata.svg';
import Create from  '../../assets/create.svg';
import Apply from '../../assets/apply.svg'
import {Icon} from "@iconify/react";
import {useNavigate} from "react-router-dom";
import Job1 from '../../assets/job1.jpeg';
import Job2 from '../../assets/job2.jpeg';
import Job3 from '../../assets/job3.jpeg';
import Job4 from '../../assets/job4.jpeg';
import Job5 from '../../assets/job5.jpeg';
import SleekSlider from "./sleekSlider";

export default function MidBody() {
    const navigate = useNavigate()
    const JobList =()=>{
        const list = [
            [Job1,'Digital Marketer','Jobber-Node','Featured','Lagos, Nigeria','Full Time','30 Days ago','N240,000'],
            [Job2,'Senior Developer','Quaffy-Links','Urgent','Plateau, Nigeria','Remote','23 Days ago','N400,000'],
            [Job3,'Android Developer','Quaffy-Links','Urgent','Plateau, Nigeria','Contract','20 Days ago','N500,000'],
            [Job4,'Backend Developer','Kode-Mpire','Featured','Abuja, Nigeria','Remote','11 Days ago','$2,000'],
            [Job5,'Erlang Developer','USwitch','Featured','Lagos, Nigeria','Remote','4 Days ago','$8,000']
        ]
        return (
            <div className={'flex flex-col bg-green-600 gap-7 pb-[60px]'}>
                {
                    list.map(([image,job,company,urgency,location,type,posted,amount])=>(
                        <div className={`flex border-1 bg-white px-auto py-[10px] gap-5 w-full md:w-[60vw] md:px-[5vw] transition-transform transform hover:scale-105
                        justify-center items-center rounded-3xl`} >
                            <div className={`hidden md:flex md:h-[120px] w-[120px] overflow-hidden rounded-3xl transition-transform transform hover:scale-105 border-4 `}>
                                <img src={image} className={'hidden md:flex'} alt=""/>
                            </div>
                            <div className={'flex flex-col gap-3 mt-[-2vw] md:mt-0'}>
                                <div className={'flex md:justify-between md:items-center'}>
                                    <p className='font-semibold pl-[20px] text-[20px] md:pl-0 lg:mx-0 md:text-lg text-green-600 pt-[5px] lg:pt-[10px]'>
                                        {job}, {company}
                                    </p>
                                    <p className={'hidden md:flex items-center justify-center text-green-400 border-1 bg-gray-100 ' +
                                        'text-lg font-bold border-black rounded-xl w-[80px] p-[10px] mt-[5px] ml-5'}>
                                        {urgency}
                                    </p>
                                </div>
                                <div className={'flex gap-[10vw] pt-[-10px] md:pt-0'}>
                                    <div className={'flex gap-1'}>
                                        <div className={'pt-2'}>
                                            <Icon icon="healthicons:geo-location-outline" width={30} height={30}
                                                  style={{color: 'black'}} />
                                        </div>
                                        <p className={'text-md font-bold pt-[10px] justify-center'}>{location}</p>
                                    </div>
                                    <div className={'flex '}>
                                        <div className={'pt-2'}>
                                            <Icon icon="marketeq:work" width={30} height={30} />
                                        </div>
                                        <p className={'font-bold text-md pt-[10px] md:pt-3 justify-center'}>{type}</p>
                                    </div>
                                </div>
                                <div className={'flex gap-[10vw] pt-[-10px] md:pt-0'}>
                                    <div className={'flex gap-1'}>
                                        <div className={'pt-2'}>
                                            <Icon icon="weui:time-outlined" width={30} height={30}  style={{color: 'black'}}/>
                                        </div>
                                        <p className={'text-md font-bold pt-[10px] justify-center'}>{posted}</p>
                                    </div>
                                    <div className={'flex gap-1'}>
                                        <div className={'pt-2'}>
                                            <Icon icon="ep:price-tag" width={30} height={30}  style={{color: 'black'}} />
                                        </div>
                                        <p className={'font-bold text-md pt-[5px] md:pt-3 justify-center'}>{amount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
    const ListBody =()=>{
        const pack = [
            ['Create a Free Account','Create an Account that helps you Unlock your path way your dream job.', Create],
            ['Build Your Resume','With Nodium You can build and make you resume ammazing.',Build],
            ['Build for Jobs','With Nodium You can get In touch with your Dream job',Apply]
        ]
        return (
            <div >
                {pack.map(([header,middle,images])=>(
                    <div className={'flex py-[30px] gap-3 border-[1px] my-[5px] px-[20px] rounded-2xl hover:bg-gray-200' +
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
        <div className="flex flex-col py-[60px]">
            <div className="flex flex-col justify-center items-center">
                <p className={'text-2xl md:text-5xl  font-semibold text-green-600'}>
                    Browse Job Category
                </p>
                <p className={'text-lg md:text-3xl font-thin md:font-thin text-center'}>
                    Looking for your next career opportunity. Look no further
                </p>
            </div>
            <div className={'my-[60px]'}>
                <SleekSlider/>
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
            <div className={'flex bg-green-600 justify-center'}>
                <JobList/>
            </div>
        </div>
    );
}