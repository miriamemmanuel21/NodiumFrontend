import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
export default function ApplicationOverview() {
    const [jobCount, setJobCount] = useState(0);
    const [applicationCount, setApplicationCount] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);
    const base_url = localStorage.getItem("base_url");
    const id = localStorage.getItem("id");
    const notificationEndpoint = `${base_url}/api/v1/nodium/providers/get-notifications/${id}`;
    const applicationsEndpoint = `${base_url}/api/v1/nodium/providers/getAllBookings/${id}`;
    const reviewsEndpoint = `${base_url}/api/v1/nodium/providers/getReviews/${id}`;
    const role = localStorage.getItem("role");
    const getJobs = async () => {
        try {
            const response = await fetch(notificationEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            const data = await response.json();
            setJobCount(data?.response?.length || 0);
        }
        catch (err) {
            setError(err);
        }
        finally{
            setLoading(!loading);
            error=null;
        }
    };
    const getApplications = async () => {
        try {
            const response = await fetch(applicationsEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setApplicationCount(data?.response?.length || 0);
        }
        catch (err) {
            setError(err);
        }
    };
    const getReviews = async () => {
        try {
            const response = await fetch(reviewsEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer ' + localStorage.getItem('token')
                },
            });
            const data = await response.json();
            setReviewCount(data?.response?.length || 0);
        } catch (err) {
            setError(err);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await Promise.all([getJobs(), getApplications(), getReviews()]);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className={`bg-white flex flex-col md:justify-center md:items-center p-[20px] 
                         md:pt-[20px] md:px-[80px] md:pb-[60px] rounded-md border-black border-[1px]
                         md:mt-[40px] md:ml-[30px]`}>
            <p className={`py-[10px] font-medium mb-[15px]`}>Application Overview</p>
            <div className="flex flex-col gap-[30px]
            md:grid md:grid-cols-2 md:grid-rows-1 md:place-items-center">
                {role === "USER" ?
                    <div className="flex transition-transform bg-white transform hover:scale-110
                    gap-4 order-1 p-[3px] md:p-[10px] rounded-xl border-black border-[1px]">
                    <p className="rounded-lg p-[2px] md:p-2 flex justify-center items-center bg-gray-200">
                        <Icon icon="arcticons:jobstreet" width={40} height={40} style={{color: 'black'}}/>
                    </p>
                    <div className="px-5 pl-[-5px] flex justify-between items-center md:flex-col">
                        <p className="text-3xl">{jobCount}+</p>
                        <p className="text-md lg:text-lg font-thin text-gray-500 pt-[4%]">Jobs Posted</p>
                    </div>
                </div> :
                <div
                    className="flex transition-transform bg-white transform hover:scale-110
                    gap-4 order-2  p-[3px] md:p-[10px] rounded-xl border-black border-[1px]">
                    <p className="rounded-lg p-[2px] md:p-2 flex justify-center items-center bg-gray-200">
                        <Icon icon="marketeq:job" width={40} height={40}/>
                    </p>
                    <div className="px-5 flex justify-between items-center md:flex-col pl-[]">
                        <p className="text-3xl">{applicationCount}+</p>
                        <p className="text-sm md:text-md lg:text-lg font-thin text-gray-500 pt-[5%]">Applications</p>
                    </div>
                </div>
}

                <div
                    className="flex transition-transform bg-white transform hover:scale-110 gap-4
                    order-3 p-[3px] md:p-[10px] rounded-xl border-black border-[1px]">
                    <p className="rounded-lg p-[2px] md:p-2 flex justify-center items-center bg-gray-200">
                        <Icon icon="material-symbols-light:reviews-outline" width={40} height={40}
                              style={{color: 'black'}}/>
                    </p>
                    <div className="px-5 flex justify-between items-center md:flex-col">
                        <p className="text-3xl">{reviewCount}+</p>
                        <p className="text-sm md:text-md lg:text-lg font-thin text-gray-500 pt-[5%]">Reviews</p>
                    </div>
                </div>
            </div>

        </div>
    );
}