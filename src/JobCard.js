import { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';
import {Link} from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle
} from 'reactstrap';

const JobCard = ({id, title, salary, equity, companyName}) => {
    const {hasAppliedToJob, applyToJob} = useContext(UserContext);
    const [applied, setApplied] = useState()

    useEffect(() => {
        setApplied(hasAppliedToJob(id))
    }, [id, hasAppliedToJob])

    const handleApply = (evt) => {
        evt.preventDefault();
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }

    return (
        <Link color='sucess' to={`/jobs/${id}`}>
            <Card
            className='main-card'
            outline
            color='success'
            style={{
                width: '18rem'
            }} 
         > {applied}
            <CardBody>
                <CardTitle>
                    <b>{title}</b>
                </CardTitle>
                <CardSubtitle>
                    {companyName}
                </CardSubtitle>
                <CardText> 
                    Salary: {salary}
                    <br/>
                    Equity: {equity}
                </CardText>
            </CardBody>
         </Card> 
        </Link>
    )
}

export default JobCard;