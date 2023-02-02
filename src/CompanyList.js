import {useState, useEffect} from 'react';
import { CardGroup } from 'reactstrap';
import JoblyApi from './api'
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';


const CompanyList = () => {

    //Set state for companies data

    const [compData, setCompData] = useState([]);

    //Grab companies data

     useEffect(() => {
        async function getCompanies(){
        const companies = await JoblyApi.request('companies')
        setCompData(companies); 
        } getCompanies()
    }, [])

    //search function that sets the state with the data found
   
    //If no company data return message

    if (!compData.companies) return <div><h1>No companies here!</h1></div>
    
    //Push companies data to array
    let comps = [];
    for(let i = 0; i < compData.companies.length; i++){
        comps.push(compData.companies[i])
    }

    //Map over the companies data array and create components based on the data

    let compElm = comps.map(c => {
        return ( 
            <CompanyCard key={c.handle} handle={c.handle} name={c.name} description={c.description} logoUrl={c.logoUrl} />
        )
    })

    


    return (
        <div className='CompanyList'>
            <header className='CompanyList-header'>
            <h1>COMPANIES</h1>
            </header>
            <div className='search-bar'>
            <SearchForm />
            </div>
            <div className='C ompanyList-list'>
                <CardGroup>
                {compElm}
                </CardGroup>
            </div>
        </div>

    )
};

export default CompanyList;
