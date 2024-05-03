import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Ticket } from "./page/admin/ticket/Ticket";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TicketListing } from "./page/admin/ticket-listing/TicketListing";
import { Dashboard } from "./page/admin/dashboard/Dashboard";
import { EntryPage } from "./page/admin/entry/EntryPage";
import { AddTicket } from "./page/admin/new-ticket/AddTicket";
import { PrivateRoute } from "../src/components/private-route/PrivateRoute";
import { Signup } from "./components/sign-up/Signup";
import { Login } from "./components/login/Login";
import { AddUserAdmin } from "./components/admin-crud/AddUserAdmin";
import { Logout } from "./components/logout/Logout";
import { UpdateUser } from "./components/ticket-table/UpdateUser";

import { UserDashboard } from "./page/user-page/user-dashboard/UserDashboard";
import { UserAddTicket } from "./page/user-page/user-new-ticket/UserAddTicket";
import { UserTicket } from "./page/user-page/user-ticket/UserTicket";
// import { UserTicketListing } from "./page/user-page/user-ticket-listing/UserTicketListing";
import { PrivateRouteUser } from "./components/private-route-user/PrivateRouteUser";
import { UserTicketTable } from "./page/user-page/user-dashboard/UserTicketTable";
import { ViewUser } from "./page/user-page/user-dashboard/ViewUser";
// import { UserAddTicket } from "./page/user-page/user-new-ticket/UserAddTicket";

function App() {
  const [role, setRole] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole("");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EntryPage setRole={setRole} />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login setRoleVar={setRole} />} />
          <Route path="/logout" element={<Logout setRole={setRole} />} />

          {/* <Route path="*" element={<p></p>} /> */}
        </Routes>

        {/* <DefaultLayout> */}
        <Routes>
          {/* <Route exact path="/" element={<AddTicket />} />
            <Route exact path="/" element={<TicketListing />} />
            <Route exact path="/ticket/:tid" element={<Ticket />} /> */}

          <Route path="/pages" element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-ticket" element={<AddTicket />} />
            <Route path="tickets" element={<TicketListing />} />
            <Route path="admin" element={<AddUserAdmin />} />
            <Route path="ticket/:tId" element={<Ticket />} />
            <Route path="update/:id" element={<UpdateUser />} />
          </Route>

          <Route path="/user" element={<PrivateRouteUser />}>
            <Route path="user-dashboard" element={<UserDashboard />} />
            <Route path="user-add-ticket" element={<UserAddTicket />} />
            <Route path="user-tickets" element={<UserTicketTable />} />
            <Route path="user-ticket/:tId" element={<UserTicket />} />
            {/* <Route path="submitTicket" element={<UserAddTicket />} /> */}
            <Route path="view/:id" element={<ViewUser />} />
          </Route>
        </Routes>
        {/* </DefaultLayout> */}

        {/*  */}
        {/* <Routes>
          <Route exact path="/" element={<EntryPage />} />

          <DefaultLayout>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket">
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets">
              <TicketListing />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tid">
              <Ticket />
            </PrivateRoute>
          </DefaultLayout>
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
