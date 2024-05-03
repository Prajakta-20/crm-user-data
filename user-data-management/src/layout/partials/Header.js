import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { Navigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// import { EntryPage } from "../../page/entry/EntryPage";

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="info" expand="md">
      <Navbar.Brand className="mx-4">Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mx-4">
          <LinkContainer to="/pages/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/pages/tickets">
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
