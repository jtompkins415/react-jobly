import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import JoblyApi from "./api";

const CompanyDetails = () => {

    const { handle } = useParams()

    const [compData, setCompData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    
   useEffect(() => {
    async function getCompany(){
        setCompData(await JoblyApi.getCompany(handle))
        setIsLoading(false)
    } 
    getCompany ()
   }, [handle])

   if (isLoading) return <div><h1>Loading...</h1></div>

    return (
        <div>
            <h4>{compData.name}</h4>
            <h6>{compData.description}</h6>
        </div>
    )
};

export default CompanyDetails;

