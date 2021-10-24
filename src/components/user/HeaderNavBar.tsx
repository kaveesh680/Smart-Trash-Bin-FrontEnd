import React, {useState} from "react";
import {Col, Nav, Navbar, Row} from "react-bootstrap";
import HeaderNavLink from "./HeaderNavLink";
import BtnArea from "./BtnArea";

const HeaderNavBar: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <Row>
            <Col xs={12} className='px-0 border'>
                <Navbar expand="md" className='py-0 float-md-right pr-md-4'>
                    <HeaderNavLink icon='phone' detail='Contact Us'/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <HeaderNavLink icon='learn' detail='Learn'/>
                            <HeaderNavLink icon='user' detail='My Account'/>
                            <BtnArea/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>

    )
}

export default HeaderNavBar;