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
                        <Nav.Link href="Nostalgia" className={activeLink == 'nostalgia' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('nostalgia')}>Nostalgia</Nav.Link>
                        <Nav.Link href="JoyOfNature" className={activeLink == 'nature' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('nature')}>Nature</Nav.Link>
                        <Nav.Link href="Whimsical" className={activeLink == 'whimsical' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('whimsical')}>Whimsical</Nav.Link>
                        <Nav.Link href="Impermanence" className={activeLink == 'impermanence' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('impermanence')}>Impermanence</Nav.Link>
                        <Nav.Link href="WildandFeral" className={activeLink == 'feral' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('feral')}>Feral</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}