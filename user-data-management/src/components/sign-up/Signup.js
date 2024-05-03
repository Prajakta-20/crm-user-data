import React, { useState } from "react";
import "./entry.css";
// import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box col-md-4">
        <Container>
          <Row>
            <Col>
              <h1 className="text-secondary">User Sign Up</h1>
              <hr />

              <Form autoComplete="off" onSubmit={handleSubmit}>
                <Form.Group className="my-2">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    // value={email}
                    placeholder="Enter Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="my-2">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                    placeholder="Enter Email"
                    required
                  />
                </Form.Group>
                <Form.Group className="my-2">
                  <Form.Label>Enter Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    // value={email}
                    placeholder="Enter Password"
                    required
                  />
                </Form.Group>
                <Button className="my-2" type="submit">
                  Sign Up
                </Button>
              </Form>
              <hr />
            </Col>
          </Row>

          <Row>
            <Col>
              <small>
                Already have an account?
                <Link to="/login"> Login Now </Link>
              </small>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

// Signup.propTypes = {
//   handleOnChange: PropTypes.func.isRequired,
//   handleOnRegisterSubmit: PropTypes.func.isRequired,
//   formSwitcher: PropTypes.func.isRequired,
//   // email: PropTypes.string.isRequired,
// };
