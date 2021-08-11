import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import LogoArea from "../common/LogoArea";
import NeedHelp from "../common/NeedHelp";
import LogInHeader from "../common/LogInHeader";
import RegisterForm from "./RegisterForm";

const Register: React.FC = () => {

    return (
        <Container className='shadow logIn'>
            <Row>
                <LogoArea/>
                <Col md={8} xs={12} className='pt-md-3 pt-1'>
                    <NeedHelp/>
                    <LogInHeader header="Sign Up" classname="logInHeader"/>
                    <RegisterForm/>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;