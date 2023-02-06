import React from 'react';
import {Link} from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'

const CompanyCard = ({handle, name, description, logoUrl}) => {
     
    return (
        <>
        <Link to={`/companies/${handle}`}>
         <Card
            outline
            color='primary'
            style={{
                width: '10rem'
            }} 
         >
            <CardBody>
                <CardTitle>
                    <b>{name}</b>
                    <img src={logoUrl} alt="comp_logo"className='float-right ml-5'/>
                </CardTitle>
                <CardText> 
                    {description}
                </CardText>
            </CardBody>
         </Card> 
        </Link> 
        </>
    )
};

export default CompanyCard;