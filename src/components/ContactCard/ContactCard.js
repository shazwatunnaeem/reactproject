import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phone from './phone.png';
import email from './email.png';
import './ContactForm.css';
import person1 from './person1.png';

export function ContactCard(props) {

    console.log(props);
    const { form } = props;
    return (
        <div>
            <Card className="mx-5 my-3">
                <CardBody className="m-2">
                    <Row>
                        <Col style={{ textAlign: "left" }}> <CardTitle tag="h4" style={{ color: "#0c5d97" }}> {form.name} </CardTitle>
                            <CardText>
                            <CardImg className="crdimg"
                                src={email} alt="" />
                                 {form.email}
                            </CardText>
                            <CardText>
                                <CardImg className="crdimg" src={phone} alt="" />
                                 {form.phone}
                            </CardText>
                            

                            <Button style={{ backgroundColor: "black" }} className="mx-2"> Edit </Button>
                            <Button style={{ backgroundColor: "red" }} > Delete </Button>

                        </Col>
                        <Col style={{textAlign: "right"}}>
                            <Button style={{ backgroundColor: "black" }} className="mb-3" disabled> {form.gender} </Button> <br></br>
                            <CardImg className="contactimg" src={person1} alt="" />

                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}
