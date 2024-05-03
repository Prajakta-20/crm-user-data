import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Breadcrupb } from "../../../components/breadcrumb/Breadcrupb";
import { SearchForm } from "../../../components/search-form/SearchForm";
import { TicketTable } from "../../../components/ticket-table/TicketTable";
import tickets from "../../../assets/data/dummy-ticket.json";
import { Link } from "react-router-dom";

export const TicketListing = () => {
  const [str, setStr] = useState("");

  const [dispTicket, setDispTicket] = useState(tickets);
  useEffect(() => {}, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setStr(value);
    searchTicket(value);
    // console.log(e.target);
  };

  const searchTicket = (sttr) => {
    const displayTicket = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    console.log(displayTicket);

    setDispTicket(displayTicket);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrupb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/pages/add-ticket">
            <Button variant="primary">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />

      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};
