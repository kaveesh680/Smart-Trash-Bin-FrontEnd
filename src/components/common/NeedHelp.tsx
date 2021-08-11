import React from "react";
import {Col, Row} from "react-bootstrap";

const NeedHelp: React.FC = () => {
    return (
        <Row className='needHelp'>
            <Col xs={12}>
                <p className='float-right pr-md-5'>Need help?</p>
            </Col>
        </Row>
    )
}

export default NeedHelp;