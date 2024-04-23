import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Breadcrupb } from "../../components/breadcrumb/Breadcrupb";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm";
import { shortText } from "../../utils/Validation";

const initialFrmData = {
  subject: "",
  issueDate: "",
  details: "",
};

const initialFrmError = {
  subject: false,
  issueDate: false,
  details: false,
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmData);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  useEffect(() => {}, [frmData, frmDataError]);

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

    setFrmDataError(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid,
    });

    console.log("Form submit request received");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrupb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
            frmDataError={frmDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};
