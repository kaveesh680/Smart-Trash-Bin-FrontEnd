import React from "react";
import {Col, Row} from "react-bootstrap";

type LogInHeaderProps = {
    header: string
    classname: string
}

const LogInHeader: React.FC<LogInHeaderProps> = (props) => {

    const {header, classname} = props;

    return (
        <Row className={classname}>
            <Col xs={12} className='text-center'>
                <h2>{header}</h2>
            </Col>
        </Row>
    )
}

export default LogInHeader;