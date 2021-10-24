import React from 'react'
import QRCode from "react-qr-code";
import {Container} from "react-bootstrap";

const QRCodeGenerator:React.FC = () => {
    console.log("uyuyu")
    return(
        <Container>
            <QRCode value="hey" />
        </Container>
    )
}

export default QRCodeGenerator;