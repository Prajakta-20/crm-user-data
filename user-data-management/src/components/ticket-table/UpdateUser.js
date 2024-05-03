import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../add-ticket-form/AddTicket_form.css";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const UpdateUser = () => {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  //   const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result);
        setUsername(result.data.username);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setAddress(result.data.address);
        // setPassword(result.data.password);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, {
        username,
        email,
        phone,
        address,
      })
      .then((result) => {
        navigate("/pages/dashboard");
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div className="mx-auto mb-5 p-2 bg-light rounded-3 w-75 add-new-ticket">
          <h1 className="text-secondary text-center mt-3">Update User</h1>
          <div className="container-fluid py-4 px-4">
            <Form autoComplete="off" onSubmit={Update}>
              <Form.Group as={Row} className="my-3">
                <Form.Label column sm={3}>
                  User Name
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Name"
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="my-3">
                <Form.Label column sm={3}>
                  User Email Address
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="my-3">
                <Form.Label column sm={3}>
                  User Contact Number
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="Contact Number"
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="my-3">
                <Form.Label column sm={3}>
                  User Address
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    placeholder="Address"
                    required
                  />
                </Col>
              </Form.Group>
              {/* <Form.Group as={Row} className="my-3">
                <Form.Label column sm={3}>
                  Private Key
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Key"
                    required
                  />
                </Col>
              </Form.Group> */}

              <div className="d-grid btn-group w-75 col-2 mx-auto">
                <Button className="my-2" type="submit" variant="info">
                  update User
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
