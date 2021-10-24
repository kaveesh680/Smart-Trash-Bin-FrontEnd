import React from "react";
import {Button} from "react-bootstrap";

const BtnArea: React.FC = () => {
    return (
        <React.Fragment>
            <Button variant="outline-success" className='py-md-0 my-md-2 pl-md-2 ml-2 mb-2'>Log Out</Button>
        </React.Fragment>
    )
}

export default BtnArea;