import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import {Icon} from "@iconify/react";
export default function AppliedJobsContents() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const jobsAppliedFor = async () => {
        try {
            const response = await fetch(`/api/v1/nodium/posted-jobs/${localStorage.getItem("id")}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': "application/json"
                }
            });
            return await response.json();
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        const fetchJobs = async () => {
            const data = await jobsAppliedFor();
            if (data) {
                setJobs(data);
            }
            setLoading(false);
        };
        fetchJobs();
    }, []);

    return (
        <div className={`bg-white m-[5%]`}>
            <p className={`text-sm md:text-lg font-medium md:font-bold p-[1%] bg-[#C1C1C1] rounded`}>Applied Jobs</p>
            {loading ? (
                <div>Loading...</div>
            ) : jobs && jobs.length > 0 ? (
                jobs.map(({ companyName, location, jobType, timePosted, requirements, status }, key) => (
                    <div key={key} className={`mx-[10%] border-black border-[5px] p-4 mb-4`}>
                        <p className={`font-thin text-md`}>{companyName}</p>
                        <section className={'flex flex-col md:grid md:grid-rows-1 md:grid-cols-3 gap-2'}>
                            <div className={`flex gap-1`}>
                                <Icon icon="entypo:location-pin" width={30} height={30} style={{ color: 'black' }} />
                                <p className={'font-thin'}>{location}</p>
                            </div>
                            <div className={`flex gap-1`}>
                                <Icon icon="fluent-mdl2:work" width="1.2rem" height="1.2rem" style={{ color: 'black' }} />
                                <p className={'font-thin'}>{jobType}</p>
                            </div>
                            <div className={`flex gap-1`}>
                                <Icon icon="weui:time-outlined" width="1.2rem" height="1.2rem" style={{ color: 'black' }} />
                                <p className={'font-thin'}>{timePosted}</p>
                            </div>
                        </section>
                        <div className={'mt-2'}>
                            {requirements && requirements.map((requirement, index) => (
                                <p key={index} className={`p-[10%]`}>{requirement}</p>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className={`p-8 text-gray-500 font-thin md:font-medium rounded-b-2xl
                 text-center md:text-3xl`}>
                    No jobs applied for yet
                </p>
            )}
            <ToastContainer/>
        </div>
    );
}
