import {useState, useEffect} from 'react';
import { CardGroup } from 'reactstrap';
import JoblyApi from './api'
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';


const CompanyList = () => {

    //Set state for companies data

    const [compData, setCompData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    //use search function to grab companies data

     useEffect(() => {
        searchFor();
    }, [])

    //search function that sets the state with the data found

    const searchFor = async (value) => {
        const res = await JoblyApi.getCompanies(value);
        setCompData(res)
        setIsLoading(false);
    }
   
    //Let user know if page is loading, if no companies show user
    if (isLoading) return <div><h1>Loading...</h1></div>
    if(!compData.length) return <div><h1>Sorry... No Companies</h1></div>
    
    // //Push companies data to array
    let comps = [];
    for(let i = 0; i < compData.length; i++){
        comps.push(compData[i])
    }

    // //Map over the companies data array and create components based on the data

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
            <SearchForm searchFor={searchFor}/>
            </div>
            <div className='CompanyList'>
                <CardGroup>
                {compElm}
                </CardGroup>
            </div>
        </div>
    );
};

export default CompanyList;
