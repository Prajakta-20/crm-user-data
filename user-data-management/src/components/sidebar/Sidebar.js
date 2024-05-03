import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";
import {
  FaCubesStacked,
  FaUser,
  FaAddressCard,
  FaRegAddressCard,
  FaPowerOff,
} from "react-icons/fa6";

export const Sidebar = () => {
  const [activelink, setActivelink] = useState(1);

  return (
    <div className="sidebar ">
      <div className="sidebar-item">
        <div className="textLink">
          <FaCubesStacked className="top-icon" />
        </div>
      </div>
      <hr />
      <div
        className={`sidebar-link ${activelink === 0 ? "activeLink" : ""}`}
        onClick={() => setActivelink(0)}
      >
        <Link className="sidebar-link">
          <div className="textLink">
            <FaUser className="icon" />
            Profile
          </div>
        </Link>
      </div>
      <div className={`sidebar-link ${activelink === 1 ? "activeLink" : ""}`}>
        <Link
          to="/pages/admin"
          className="sidebar-link"
          onClick={() => setActivelink(1)}
        >
          <div className="textLink">
            <FaAddressCard className="icon" />
            Add User
          </div>
        </Link>
      </div>
      <div
        className={`sidebar-link ${activelink === 2 ? "activeLink" : ""}`}
        onClick={() => setActivelink(2)}
      >
        <Link to="/pages/tickets" className="sidebar-link">
          <div className="textLink">
            <FaRegAddressCard className="icon" />
            See Tickets
          </div>
        </Link>
      </div>
      <div
        className={`sidebar-link ${activelink === 3 ? "activeLink" : ""}`}
        onClick={() => setActivelink(3)}
      >
        <Link to="/profile" className="sidebar-link">
          <div className="textLink">
            <FaPowerOff className="icon" />
            Exit
          </div>
        </Link>
      </div>
    </div>
  );
};
