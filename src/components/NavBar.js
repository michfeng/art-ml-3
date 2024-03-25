import React, { useEffect } from "react";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import image from "../images/main-image.png"


export const NavBar = () => {
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

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/art-ml-3" className={activeLink == '/art-ml-3' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                    <img src={image} alt="logo" style={{"width":"50px"}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse className="nav">
                    <Nav className="ms-auto" id="navbarTarget">
                        <Nav.Link href="/art-ml-3/#/nostalgia" className={activeLink == 'nostalgia' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('nostalgia')}>Nostalgia</Nav.Link>
                        <Nav.Link href="/art-ml-3/#/joy-of-nature" className={activeLink == 'joy-of-nature' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('joy-of-nature')}>Nature</Nav.Link>
                        <Nav.Link href="/art-ml-3/#/whimsical" className={activeLink == 'whimsical' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('whimsical')}>Whimsical</Nav.Link>
                        <Nav.Link href="/art-ml-3/#/impermanence" className={activeLink == 'impermanence' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('impermanence')}>Impermanence</Nav.Link>
                        <Nav.Link href="/art-ml-3/#/wild-and-feral" className={activeLink == 'wild-and-feral' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('wild-and-feral')}>Feral</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}