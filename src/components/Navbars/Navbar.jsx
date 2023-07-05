import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import "./Navbar.scss";
import Cart from "../../Carts/Cart";
import navIcon4 from '../../img/nav-icon4.svg';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../stores/firebase/config";

const NavBar = (props) => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setDisplayName(user.displayName || "");
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Xử lý đăng xuất thành công
                // Load lại trang
                window.location.reload();
            })
            .catch((error) => {
                // Xử lý lỗi đăng xuất
                console.log(error);
            });
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <div style={{ display: "flex", color: "white", justifyContent: "space-between", gap: "20px" }}>
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
                        <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="/#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Game</Nav.Link>
                        <Nav.Link href="/#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a ><img src={navIcon4} alt="" variant="outline-primary" onClick={handleShow} /></a>
                        </div>
                        {displayName ? (
                            <span><button className="vvd" onClick={handleLogout}><span>{displayName}</span></button></span>
                        ) : (
                            <span>
                                <HashLink to='/login'><button className="vvd"><span>Log in</span></button></HashLink>
                            </span>
                        )}
                    </span>
                </Navbar.Collapse>
            </Container>
            <Cart handleClose={handleClose} show={show} />
        </Navbar>
    );
};

export default NavBar;
