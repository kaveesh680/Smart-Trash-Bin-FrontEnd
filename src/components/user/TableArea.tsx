import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import DisposeHistoryTable from "./DisposeHistoryTable";

const TableArea: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row className='mt-4 adminTable mx-0 justify-content-center'>
                <Col xs={12} xl={10} className='px-0'>
                    <Row>
                        <Col xs={12}>
                            <Row className='pl-0 pl-md-4 ml-0 mr-2 '>
                                <Col md={8} xl={10} lg={9} sm={6}
                                     className='px-0 pt-2 checkOut-label text-md-left text-center'>
                                    <h4 className='mb-0'>Dispose History</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Card className='mx-md-4 ml-0 px-3 py-3 my-3 mr-0'>
                        <Card.Body className='px-0 px-xl-5 px-md-0'>
                            <DisposeHistoryTable/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default TableArea;