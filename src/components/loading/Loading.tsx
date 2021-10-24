import React from "react";
import {Col, Container, Row, Spinner} from "react-bootstrap";

const Loading: React.FC = () => {
    return (
        <Container>
            <Row className='loading min-vh-100'>
                <Col xs={12} className='justify-content-center align-items-center d-flex'>
                    <Spinner animation={"border"}/>
                    <label className='pl-2 m-0'>Loading</label>
                </Col>
            </Row>


        </Container>
    );
}

export default Loading;
