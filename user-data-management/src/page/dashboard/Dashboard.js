import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-ticket.json";
import { Breadcrupb } from "../../components/breadcrumb/Breadcrupb";

export const Dashboard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Breadcrupb page="Dashboard" />
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-5 mb-2">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Feedback
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mb-2">
            <div>Total Tickets: 20</div>
            <div>Pending Tickets: 4</div>
          </Col>
        </Row>

        <Row>
          <Col className="mt-2">Recently Added Tickets</Col>
        </Row>
        <hr />
        <Row>
          <Col className="recent-ticket">
            <TicketTable tickets={tickets} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
