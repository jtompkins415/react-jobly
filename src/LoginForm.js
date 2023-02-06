import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


const LoginForm = ({login}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [formErrors, setFormErrors] = useState([])

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}))
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let res = await login(formData);
        if (res.success) {
            navigate('/companies')
        } else {
            setFormErrors(res.errors)
        }
    }
    

    return (
        <div className='LoginForm'>
            <header className='LoginForm-head'>
                <h1>User Login</h1>
            </header>
            <div className='LoginForm-form'>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label 
                            htmlFor='username'
                        >
                            Username:
                        </Label>
                        <Input 
                            id='username'
                            name='username'
                            type='text'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label
                            htmlFor='password'
                        >
                            Password:
                        </Label>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button color='success'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
};

export default LoginForm;

