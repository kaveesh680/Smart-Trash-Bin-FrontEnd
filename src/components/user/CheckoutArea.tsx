import React from "react";
import {Col} from "react-bootstrap";
import CheckoutBtn from "./CheckoutBtn";

const CheckoutArea: React.FC = () => {
    return (
        <React.Fragment>
            <Col xs={8} className='text-right checkoutArea pt-3 pr-4'>
                <CheckoutBtn classname='ml-4'/>
            </Col>
        </React.Fragment>
    )
}

export default CheckoutArea;