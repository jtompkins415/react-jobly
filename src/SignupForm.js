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

const SignupForm = ({signup}) => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
    });

    const [formErrors, setFormErrors] = useState([])

    const handleChange = (evt) =>{
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let res = await signup(formData);
        if (res.success) {
            navigate('/companies')
        } else {
            setFormErrors(res.errors);
        }

    }

    return (
        <div className='SignupForm'>
            <div className='SignupForm-header'>
                <h1>User Sign Up</h1>
            </div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label
                        htmlFor='firstName'>
                            First Name:
                    </Label>
                    <Input
                        id='firstName'
                        name='firstName'
                        type='text'
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                        htmlFor='lastName'>
                            Last Name:
                    </Label>
                    <Input
                        id='lastName'
                        name='lastName'
                        type='text'
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                        htmlFor='email'>
                            email:
                    </Label>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                        htmlFor='username'>
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
                        htmlFor='password'>
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
                <Button
                    color='success'
                >
                    Create Account
                </Button>
            </Form>
        </div>
    )
};

export default SignupForm;