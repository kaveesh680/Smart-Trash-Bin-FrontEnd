import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import TrashBin from "../../assets/images/trashbin-removebg-preview.png";

const LogoArea: React.FC = () => {
    return (
        <Col md={4} xs={12} className='logoArea pt-md-3 text-center'>
            <Row>
                <Col xs={12}>
                    <Image src={TrashBin} alt='trashing'/>
                    <p className='mt-1'>Help the world by setting the
                        example: Reduce, Reuse, Recycle</p>
                </Col>
            </Row>
        </Col>
    )
}

export default LogoArea;