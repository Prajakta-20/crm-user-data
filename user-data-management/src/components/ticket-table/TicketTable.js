import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

export const TicketTable = ({ tickets }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users.length ? (
          users.map((user) => (
            <tr key={user.id}>
              {/* <td>{user.id}</td> */}
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <Link
                  to={`/pages/update/${user._id}`}
                  className="btn btn-primary btn-sm mx-2"
                >
                  Update
                </Link>{" "}
                <Link
                  // to="/pages/delete"
                  className="btn btn-danger btn-sm"
                  onClick={(e) => handleDelete(user._id)}
                >
                  Delete
                </Link>
                {/* <Button>Edit</Button>{" "} */}
                {/* <Button className="btn btn-danger"></Button> */}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No ticket to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
