import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import {useNavigate} from 'react-router-dom';


export function Login() {
    const navigate = useNavigate();
    const navigateToForm = () => {
        navigate('/contactform');
      };

  return (
    <div>
      <h2>Log In</h2>
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
            />
          </FormGroup>
          
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        <Button style={{ backgroundColor: "#084298" }} onClick= {navigateToForm}>Submit</Button>
        </Form>
    </div>
  );
}
  