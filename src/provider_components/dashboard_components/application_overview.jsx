import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
export default function ApplicationOverview() {
    const [jobCount, setJobCount] = useState(0);
    const [applicationCount, setApplicationCount] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const notificationEndpoint = '';
    const applicationsEndpoint = '';
    const reviewsEndpoint = '';

    const getJobs = async () => {
        try {
            const response = await fetch(notificationEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setJobCount(data?.response?.length || 0);
        } catch (err) {
            setError(err);
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
        } catch (err) {
            setError(err);
        }
    };
    const getReviews = async () => {
        try {
            const response = await fetch(reviewsEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
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
        <div className={``}>
            <p className={'mt-[20px] ml-[60px] text-lg'}>Application Overview</p>

            <div
                className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-[90vw] md:w-[70vw] pt-[10px] gap-4 h-[25vw] px-[4vw] justify-between items-center">
                <div
                    className="flex transition-transform bg-white transform hover:scale-110
                    gap-4 order-1 w-[90%] p-[3px] md:p-[10px] rounded-xl">
                    <p className="rounded-lg p-[2px] md:p-2 flex justify-center items-center bg-gray-200">
                        <Icon icon="arcticons:jobstreet" width={40} height={40} style={{color: 'black'}}/>
                    </p>
                    <div className="px-5 flex justify-between items-center md:flex-col">
                        <p className="text-3xl">{jobCount}+</p>
                        <p className="text-sm md:text-md lg:text-lg font-thin text-gray-500 pt-[5%]">Jobs Posted</p>
                    </div>
                </div>
                <div
                    className="flex transition-transform bg-white transform hover:scale-110
                    gap-4 order-2 w-[90%] p-[3px] md:p-[10px] rounded-xl">
                    <p className="rounded-lg p-[2px] md:p-2 flex justify-center items-center bg-gray-200">
                        <Icon icon="marketeq:job" width={40} height={40}/>
                    </p>
                    <div className="px-5 flex justify-between items-center md:flex-col">
                        <p className="text-3xl">{applicationCount}+</p>
                        <p className="text-sm md:text-md lg:text-lg font-thin text-gray-500 pt-[5%]">Applications</p>
                    </div>
                </div>

                <div
                    className="flex transition-transform bg-white transform hover:scale-110 gap-4
                    order-3 w-[90%] p-[3px] md:p-[10px] rounded-xl">
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