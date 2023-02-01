import axios from 'axios';
import JoblyApi from './api';

const CompanyCard = () => {
     const getCompany = async () => { 
        const res = await JoblyApi.request('companies')

        console.log(res);
     }

    return (
        <>
            <button onClick={getCompany}>Click me </button>
        </>
    )
};

export default CompanyCard;