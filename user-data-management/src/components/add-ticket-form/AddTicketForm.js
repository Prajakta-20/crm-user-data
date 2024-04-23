import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./AddTicket_form.css";

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt }) => {
  console.log(frmDt);

  return (
    <div>
      <div className="mx-auto mt-4 p-2 bg-light rounded-3 w-75 add-new-ticket">
        <h1 className="text-secondary text-center">Add New Ticket</h1>
        <div className="container-fluid py-4">
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group as={Row} className="my-2">
              <Form.Label column sm={3}>
                Subject
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="subject"
                  onChange={handleOnChange}
                  value={frmDt.subject}
                  placeholder="Subject"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="my-3">
              <Form.Label column sm={3}>
                Issue found date
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="date"
                  name="issueDate"
                  onChange={handleOnChange}
                  value={frmDt.issueDate}
                  // placeholder="Enter Password"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Issue Details</Form.Label>
              <Form.Control
                as="textarea"
                name="details"
                rows="3"
                onChange={handleOnChange}
                value={frmDt.details}
                // placeholder="Enter Password"
                required
              />
            </Form.Group>

            <div className="d-grid btn-group w-25 col-2 mx-auto">
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

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
};
