import React from "react";
import {Container, Row} from "react-bootstrap";
import LogoArea from "./LogoArea";
import FormArea from "./FormArea";

const LogIn: React.FC = () => {

    return (
        <Container className='shadow logIn'>
            <Row>
                <LogoArea/>
                <FormArea/>
            </Row>
        </Container>
    )
}

export default LogIn;