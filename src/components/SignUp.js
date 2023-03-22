import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";


export function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const navigateToForm = () => {
    //     navigate('/contactform');
    //   };

    const register = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // username: username,
                // email: email,
                // password: password
            })
                .then(res => res.json())
                .then(console.log)
                .catch(err => console.log(err))
        });
    }

    const handleChange = (e) => {
        // dispatch({
        //  type: "FORM TEXT DATA",
        //  field: e.target.name,
        //  payload: e.target.value,
        // })
     };

    return (
        <div>
            <h2>SignUp</h2>
            <Form onSubmit={register} className="form">
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="example@example.com"
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        onChange={handleChange}
                    />
                </FormGroup>
                <Button style={{ backgroundColor: "#084298" }}>Login</Button>
            </Form>
        </div>
    );
}
