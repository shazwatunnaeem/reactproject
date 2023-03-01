import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input } from 'reactstrap';

export function ContactForm() {

  return (
    <Form className="m-5" width="50">
      <h3 style={{ color: "#084298" }} className="list-inline-item align-middle"> Cloud Contact </h3>
      <Form.Group className="my-3 mx-5" controlId="name">
        <Input type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="my-3 mx-5" controlId="email">
        <Input type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="my-3 mx-5" controlId="phone">
        <Input type="phone" placeholder="Phone" />
      </Form.Group>

      <Form.Group>
        <Form.Group check>
          <Form.Label check>
            <Input inline
              name="male"
              type="radio"
            />
            Male
          </Form.Label>
        </Form.Group>
        <Form.Group check>
          <Form.Label check>
          <Input inline
              name="female"
              type="radio"
            />
            Female
          </Form.Label>
        </Form.Group>
      </Form.Group>

      <Button style={{ backgroundColor: "#084298" }} size="lg" block>
        Add Contact
      </Button>
    </Form>
  );
}
