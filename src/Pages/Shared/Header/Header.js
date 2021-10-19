import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import "./Header.css"

const Header = () => {
  const {user,logOut} = useAuth();
  return (
    <div>
      <Navbar bg="light" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to="/">
            <img class="img-fluid logo" src="https://i.ibb.co/hC0VbQH/logo-1.png" alt="" />

          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end menu-text">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Our Services</Nav.Link>
            
            {user?.email ? 
          <Button onClick={logOut} variant="light">Logout</Button>  :
          <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
          }
          {user?.email?
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>:
            <Navbar.Text></Navbar.Text>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
