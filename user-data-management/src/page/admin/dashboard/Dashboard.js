import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../../components/ticket-table/TicketTable";
import tickets from "../../../assets/data/dummy-ticket.json";
import { Breadcrupb } from "../../../components/breadcrumb/Breadcrupb";
import { Link } from "react-router-dom";

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
          <Col className="text-center mt-2 mb-2">
            <Link to="/pages/admin">
              <Button
                variant="info"
                style={{ fontSize: "20px", padding: "5px 10px" }}
              >
                Add New User +
              </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="mt-2">Recently Added Users</Col>
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
