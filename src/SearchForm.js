import {useState} from 'react';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';

const SearchForm = ({searchFor}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchFor(searchTerm.trim()||undefined);
        setSearchTerm(searchTerm.trim());
    }

    const handleChange = (evt) => {
        console.log(evt.target.value)
        setSearchTerm(evt.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor='company-search'>
                    Find your company
                </Label>
                <Input
                    id="company-search"
                    name='search'
                    placeholder='Enter Company Name'
                    type='text' 
                    value={searchTerm}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button color='primary'>
                Search
            </Button>
        </Form>
    )
};

export default SearchForm;