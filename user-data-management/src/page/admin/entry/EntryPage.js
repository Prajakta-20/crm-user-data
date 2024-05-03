import React, { useEffect } from "react";
import "./entry.css";
import { Navbar, Nav } from "react-bootstrap";
// import { Navigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// import axios from "axios";

export const EntryPage = () => {
  return (
    <>
      <Navbar collapseOnSelect bg="info" variant="info" expand="md">
        <Navbar.Brand className="mx-4">Data Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mx-5 me-5 fs-5">
            <LinkContainer to="/login">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="intro bg-image shadow-2-strong"></div>
    </>
  );
};
