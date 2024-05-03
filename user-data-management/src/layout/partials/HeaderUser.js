import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { Navigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// import { EntryPage } from "../../page/entry/EntryPage";

export const HeaderUser = () => {
  // const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect bg="info" variant="info" expand="md">
      <Navbar.Brand className="mx-4">User</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mx-4">
          <LinkContainer to="/user/user-dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/user/user-tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/logout">
            <Nav.Link>Logout</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
