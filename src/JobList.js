import {useState, useEffect} from 'react';
import { CardGroup } from 'reactstrap';
import JoblyApi from './api';
import JobCard from './JobCard';


const JobList = () => {
    const [jobData, setJobData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    //Grab jobs data

     useEffect(() => {
        async function getJobs(){
        const jobs = await JoblyApi.request('jobs')
        setJobData(jobs); 
        setIsLoading(false)
        } getJobs()
    }, [])

    //search function that sets the state with the data found
   

    //Let user know if page is loading, if no companies show user
    if (isLoading) return <div><h1>Loading...</h1></div>
    if (!jobData.jobs) return <div><h1>No jobs here!</h1></div>
    
    //Push companies data to array
    let jobs = [];
    for(let i = 0; i < jobData.jobs.length; i++){
        jobs.push(jobData.jobs[i])
    }

    //Map over the companies data array and create components based on the data

    let jobElm = jobs.map(j => {
        return ( 
            <JobCard key={j.id} id={j.id} title={j.title} salary={j.salary} equity={j.equity} company_handle={j.company_handle} />
        )
    })

    
    return (
        <div className="JobList">
            <header>
                <h1>JOBS</h1>
            </header>
            <div className='JobList-list'>
                <CardGroup>
                {jobElm}
                </CardGroup>
            </div>
        </div>
    )
};

export default JobList;

