import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Breadcrupb } from "../../../components/breadcrumb/Breadcrupb";
import tickets from "../../../assets/data/dummy-ticket.json";
import { MessageHistory } from "../../../components/message-history/MessageHistory";
import { UpdateTicket } from "../../../components/update-ticket/UpdateTicket";
import { useParams } from "react-router-dom";

export const UserTicket = () => {
  const { tId } = useParams();

  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("Reply Sent!");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrupb page="Ticket History" />
        </Col>
      </Row>

      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Ticket Opened: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-end">
          <Button variant="outline-primary">Close Ticket</Button>
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>

      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
