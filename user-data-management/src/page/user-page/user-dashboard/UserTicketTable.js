import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export const UserTicketTable = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => {
        setTickets(result.data);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);

  // const handleDelete = (id) => {
  //   axios
  //     .delete("http://localhost:3001/deleteUser/" + id)
  //     .then((res) => {
  //       console.log(res);
  //       window.location.reload();
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>#</th> */}
          {/* <th>Name</th> */}
          <th>Issue</th>
          <th>Date</th>
          <th>Details</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {tickets.length ? (
          tickets.map((tickets) => (
            <tr key={tickets.id}>
              {/* <td>{user.id}</td> */}
              {/* <td>{tickets.name}</td> */}
              <td>{tickets.issue}</td>
              <td>{tickets.date}</td>
              <td>{tickets.details}</td>
              <td>
                <Link
                  to={`/user/view/${tickets._id}`}
                  className="btn btn-primary btn-sm mx-2"
                >
                  View
                </Link>{" "}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
