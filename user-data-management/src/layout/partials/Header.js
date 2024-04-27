import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Browser,
  Switch,
  Link,
  Route,
} from "react-router-dom";

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="info" expand="md">
      <Navbar.Brand className="mx-4">Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mx-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard">Tickets</Link>
          <Link to="/dashboard">Logout</Link>

          {/* <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/dashboard">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
