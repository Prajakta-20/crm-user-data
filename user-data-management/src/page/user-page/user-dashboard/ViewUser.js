import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../user-dashboard/AddTicket_form.css";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import axios from "axios";

export const ViewUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [issue, setIssue] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/viewUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setIssue(result.data.issue);
        setDate(result.data.date);
        setDetails(result.data.details);
        // setPassword(result.data.password);
      })
      .catch((err) => console.log(err));
  }, []);

  // const Update = (e) => {
  //   e.preventDefault();
  //   axios
  //     .put("http://localhost:3001/updateUser/" + id, {
  //       username,
  //       email,
  //       phone,
  //       address,
  //     })
  //     .then((result) => {
  //       navigate("/user/user-dashboard");
  //       console.log(result);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <div className="mx-auto mb-5 p-2 bg-light rounded-3 w-75 add-new-ticket">
        <h1 className="text-secondary text-center mt-3">
          View Ticket Information
        </h1>
        <div className="container-fluid py-4 px-4">
          <Form autoComplete="off">
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                User Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="username"
                  // onChange={(e) => setUsername(e.target.value)}
                  value={name}
                  placeholder="Name"
                  disabled
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                Issue
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="issue"
                  // onChange={(e) => setIssue(e.target.value)}
                  value={issue}
                  placeholder="Issue in.."
                  disabled
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                Issue occured at
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="date"
                  name="date"
                  // onChange={(e) => setDate(e.target.value)}
                  value={date}
                  // placeholder="Contact Number"
                  required
                  disabled
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                Details
              </Form.Label>

              <Col sm={9}>
                <Form.Control
                  as="textarea"
                  rows="3"
                  // type="text"
                  name="details"
                  // onChange={(e) => setDetails(e.target.value)}
                  value={details}
                  placeholder="Please elaborate the issue"
                  disabled
                  required
                />
              </Col>
            </Form.Group>

            <div className="d-grid btn-group w-25 col-2 me-1">
              <Link
                to="/user/user-dashboard"
                className="my-2 btn btn-info"
                type="submit"
                variant="info"
              >
                Back
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
