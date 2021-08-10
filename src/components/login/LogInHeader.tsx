import React from "react";
import {Col, Row} from "react-bootstrap";

const LogInHeader: React.FC = () => {
    return (
        <Row className='logInHeader mb-md-5 mt-5'>
            <Col xs={12} className='text-center'>
                <h2>Log In</h2>
            </Col>
        </Row>
    )
}

export default LogInHeader;