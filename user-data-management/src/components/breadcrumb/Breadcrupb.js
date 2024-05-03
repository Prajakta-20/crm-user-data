import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const Breadcrupb = ({ page }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/pages/dashboard">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
