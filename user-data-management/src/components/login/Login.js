import React, { useState } from "react";
import "./entry.css";
// import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ setRoleVar }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/login", { username, password, role })
      .then((result) => {
        // console.log(result);
        if (result.data.login && result.data.role === "admin") {
          setRoleVar("admin");
          navigate("/pages/dashboard");
        } else if (result.data.login && result.data.role === "user") {
          setRoleVar("user");
          navigate("/user/user-dashboard");
        }
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box col-md-4">
        <Container>
          <Row>
            <Col>
              <h1 className="text-secondary mx-4">User Login</h1>
              <hr />

              <Form autoComplete="off" onSubmit={handleSubmit}>
                <Form.Group className="my-2">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    // value={email}
                    placeholder="Enter User Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="my-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    // value={email}
                    placeholder="Enter Password"
                    required
                  />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Role</Form.Label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="role"
                    id="role"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="#">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </Form.Group>

                {/* <Row className="text-end h6">
              <Col>
                <a href="#!" onClick={() => formSwitcher("reset")}>
                  <small>Forget Password?</small>
                </a>
              </Col>
            </Row> */}

                <Button className="my-2" type="submit">
                  Login
                </Button>
              </Form>
              <hr />
            </Col>
          </Row>

          <Row>
            <Col>
              <small>
                Don't have an account? <Link to="/register">Sign up</Link>
              </small>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

// Login.propTypes = {
//   handleOnChange: PropTypes.func.isRequired,
//   handleOnSubmit: PropTypes.func.isRequired,
//   formSwitcher: PropTypes.func.isRequired,
//   email: PropTypes.string.isRequired,
//   pass: PropTypes.string.isRequired,
// };
