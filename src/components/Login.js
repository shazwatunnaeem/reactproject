import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToForm = () => {
    const user = { email, password };
    fetch("http://localhost:5000/login",
      {
        method: "POST",
        credentials: "include",

        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "LOGIN" });
        navigate('/contactform');
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div>
      <h2>Log In</h2>
      <Form className="form">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <a href="/signup">SignUp</a>
        </FormGroup>
        <Button style={{ backgroundColor: "#084298" }} onClick={navigateToForm}>Login</Button>
      </Form>
    </div>
  );
}
