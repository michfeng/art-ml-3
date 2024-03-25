import React, { useEffect } from "react";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


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

      /*  If we want title     
       <Navbar.Brand href="/" className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
            Museum
        </Navbar.Brand> */

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse className="nav">
                    <Nav className="ms-auto" id="navbarTarget">
                        <Nav.Link href="nostalgia" className={activeLink == 'nostalgia' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('nostalgia')}>Nostalgia</Nav.Link>
                        <Nav.Link href="joy-of-nature" className={activeLink == 'joy-of-nature' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('joy-of-nature')}>Nature</Nav.Link>
                        <Nav.Link href="whimsical" className={activeLink == 'whimsical' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('whimsical')}>Whimsical</Nav.Link>
                        <Nav.Link href="impermanence" className={activeLink == 'impermanence' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('impermanence')}>Impermanence</Nav.Link>
                        <Nav.Link href="wild-and-feral" className={activeLink == 'wild-and-feral' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('wild-and-feral')}>Feral</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}