import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Breadcrupb } from "../../../components/breadcrumb/Breadcrupb";
import { AddTicketForm } from "../../../components/add-ticket-form/AddTicketForm";
// import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm";
// import { shortText } from "../../utils/Validation";

const initialFrmData = {
  subject: "",
  issueDate: "",
  details: "",
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmData);

  useEffect(() => {}, [frmData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submit request received");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrupb page="New User" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
          />
        </Col>
      </Row>
    </Container>
  );
};
