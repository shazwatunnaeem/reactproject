import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cphone from './ContactCard/phone.png';
import cemail from './ContactCard/email.png';
import './ContactCard/ContactCard.css';
import person1 from './ContactCard/person1.png';
import { useParams } from "react-router-dom";

export function ContactDetails() {

    const { name, email, phone, gender } = useParams();
    return (
        <div>
            <Card>
                <CardBody>
                    <Row>
                        <Col style={{ textAlign: "left" }}> <CardTitle tag="h4" style={{ color: "#0c5d97" }}> {name} </CardTitle>
                            <CardText>
                            <CardImg className="crdimg"
                                src={cemail} alt="" />
                                {email}
                            </CardText>
                            <CardText>
                                <CardImg className="crdimg" src={cphone} alt="" />
                                {phone}
                            </CardText>
                            <Button style={{ backgroundColor: "black" }} className="mb-3" disabled> {gender} </Button>
                        </Col>
                        <Col style={{textAlign: "right"}}>
                            <CardImg className="contactdetailimg" src={person1} alt="" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
  );
}
  