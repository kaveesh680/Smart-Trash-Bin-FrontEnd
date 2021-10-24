import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

type CheckoutBtnProps = {
    classname:string
}

const CheckoutBtn:React.FC<CheckoutBtnProps> = (props) => {

    const {classname} = props;
    let history = useHistory();

    return(
        <Button className={classname} onClick={() => history.push('/qrcode')}>QR code</Button>
    )
}

export default CheckoutBtn;