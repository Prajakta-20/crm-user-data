import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import tickets from "../../../assets/data/dummy-ticket.json";
import { Breadcrupb } from "../../../components/breadcrumb/Breadcrupb";
import { UserTicketTable } from "./UserTicketTable";
import { Link } from "react-router-dom";

export const UserDashboard = () => {
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
            <Link to="/user/user-add-ticket">
              <Button
                variant="info"
                style={{ fontSize: "2rem", padding: "10px 30px" }}
              >
                Add New Ticket
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mb-2">
            <div>Total Tickets: 10</div>
            <div>Pending Tickets: 2</div>
          </Col>
        </Row>

        <Row>
          <Col className="mt-2">Recently Added Tickets</Col>
        </Row>
        <hr />
        <Row>
          <Col className="recent-ticket">
            <UserTicketTable tickets={tickets} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
