import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import PropTypes from "prop-types";
// import "../add-ticket-form/AddTicket_form.css";
// import "../../components/add";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import axios from "axios";
import "../user-dashboard/AddTicket_form.css";

export const UserAddTicket = () => {
  //   const [values, setValues] = useState({
  //     name: "",
  //     issue: "",
  //     date: "",
  //     details: "",
  //   });
  const [name, setName] = useState("");
  const [issue, setIssue] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/submitTicket", {
        name,
        issue,
        date,
        details,
      })
      .then((result) => {
        if (result) {
          console.log(result);
          // toast.success("Ticket Added Successfully", {
          //   position: "top-right",
          //   autoClose: 5000,
          // });
          navigate("/user/user-dashboard");
        }
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mx-auto mb-5 p-2 bg-light rounded-3 w-75 add-new-ticket">
        <h1 className="text-secondary text-center mt-3">Submit Ticket</h1>
        <div className="container-fluid py-4 px-4">
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                User Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  //   value={frmDt.subject}
                  placeholder="Name"
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
                  onChange={(e) => setIssue(e.target.value)}
                  //   value={frmDt.issueDate}
                  placeholder="Issue in.."
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
                  onChange={(e) => setDate(e.target.value)}
                  //   value={frmDt.issueDate}
                  // placeholder="Contact Number"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                Details
              </Form.Label>

              <Col sm={12}>
                <Form.Control
                  as="textarea"
                  rows="3"
                  // type="text"
                  name="details"
                  onChange={(e) => setDetails(e.target.value)}
                  //   value={frmDt.issueDate}
                  placeholder="Please elaborate the issue"
                  required
                />
              </Col>
            </Form.Group>

            <div className="d-grid btn-group w-75 col-2 mx-auto">
              <Button className="my-2" type="submit" variant="info">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
