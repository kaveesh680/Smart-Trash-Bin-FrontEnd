import React from "react";
import {Container} from "react-bootstrap";
import LogoArea from "../user/LogoArea";
import HeaderNavBar from "../user/HeaderNavBar";
import TrashBinTableArea from "./TrashBinTableArea";


const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Container fluid={true} className='topNavBar'>
                <HeaderNavBar/>
                <LogoArea/>
            </Container>
            <TrashBinTableArea/>
        </React.Fragment>
    )
}

export default Home;