import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'

const CompanyCard = (name, numEmployees) => {
     
    return (
        <>
         <Card
            body
            outline
            color='primary'
            style={{
                width: '10rem'
            }} 
         >
            <CardBody>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardText>
                    {numEmployees}
                </CardText>
            </CardBody>
         </Card>   
        </>
    )
};

export default CompanyCard;