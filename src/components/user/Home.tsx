import React from "react";
import {Container} from "react-bootstrap";
import HeaderNavBar from "./HeaderNavBar";
import LogoArea from "./LogoArea";
import TableArea from "./TableArea";
import {toast} from "react-toastify";

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Container fluid={true} className='topNavBar'>
                <HeaderNavBar/>
                <LogoArea/>
            </Container>
            <TableArea/>
        </React.Fragment>
    )
}

export default Home;