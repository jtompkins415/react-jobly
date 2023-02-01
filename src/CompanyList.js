import {useState, useEffect} from 'react';
import JoblyApi from './api'
import CompanyCard from './CompanyCard';

const CompanyList = () => {
    const [compData, setCompData] = useState([]);

    useEffect(() => {
        async function getCompanies(){
        const companies = await JoblyApi.request('companies')
        setCompData(companies); 
        } getCompanies()
    }, [])

    

    let comps = [];
    for (let i = 0; i < compData.companies.length; i++){
        comps.push(compData.companies[i])
    }

    let compElm = comps.map((c) => {
        return (
            <CompanyCard key={c.handle} name={c.name} numEmployees={c.numEmployees} />
        )
    })

    return (
        <div className="CompanyList">
            <h1>COMPANIES</h1>
            <ul>
                {compElm}
            </ul>
        </div>

    )
};

export default CompanyList;
