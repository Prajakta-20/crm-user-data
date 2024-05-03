import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../add-ticket-form/AddTicket_form.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const AddUserAdmin = () => {
  //   const [values, setValues] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //   });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/admin", {
        username,
        email,
        phone,
        address,
        password,
      })
      .then((result) => {
        if (result.data.registered) {
          toast.success("User Added Successfully", {
            position: "top-right",
            autoClose: 5000,
          });
          navigate("/pages/dashboard");
        }
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="mx-auto mb-5 p-2 bg-light rounded-3 w-75 add-new-ticket">
        <h1 className="text-secondary text-center mt-3">Add New User</h1>
        <div className="container-fluid py-4 px-4">
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                User Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  //   value={frmDt.subject}
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
                  //   value={frmDt.issueDate}
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
                  //   value={frmDt.issueDate}
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
                  //   value={frmDt.issueDate}
                  placeholder="Address"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                Private Key
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  //   value={frmDt.issueDate}
                  placeholder="Key"
                  required
                />
              </Col>
            </Form.Group>

            <div className="d-grid btn-group w-75 col-2 mx-auto">
              <Button className="my-2" type="submit" variant="info">
                Add User
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

// AddTicketForm.propTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   frmDt: PropTypes.object.isRequired,
// };
