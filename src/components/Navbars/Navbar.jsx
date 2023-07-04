import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import "./Navbar.scss"
import Button from 'react-bootstrap/Button';
import Cart from "../../Carts/Cart";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>

            <Container>
                <Navbar.Brand href="/">
                    <div style={{ display: "flex", color: "white", justifyContent: "space-between", gap: "20px", marginTop: "10px" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "40px" }}>
                            stadia_controller
                        </span>
                        <h4 style={{ padding: "5px" }}>Game Store</h4>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Game</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon"></div>
                        <HashLink to='#connect'>
                            <button className="vvd"><span>Log in</span></button>
                        </HashLink>
                        <Button variant="outline-primary" onClick={handleShow}>
                            Launch
                        </Button>
                    </span>
                </Navbar.Collapse>
            </Container>
            <Cart handleClose={handleClose} show={show} />
        </Navbar>

    );
}

export default NavBar;
