import React from "react";
import {Row} from "react-bootstrap";
import Logo from "./Logo";
import CheckoutArea from "./CheckoutArea";

const LogoArea: React.FC = () => {

    return (
        <Row className='border logoArea shadow'>
            <Logo/>
            <CheckoutArea/>
        </Row>
    )
}

export default LogoArea;