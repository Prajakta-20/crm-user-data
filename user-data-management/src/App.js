import "./App.css";
// import { DefaultLayout } from "./layout/DefaultLayout";
import { Ticket } from "./page/ticket/Ticket";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TicketListing } from "./page/ticket-listing/TicketListing";
// import { Button } from "react-bootstrap";
import { Dashboard } from "./page/dashboard/Dashboard";
import { EntryPage } from "./page/entry/EntryPage";
import { AddTicket } from "./page/new-ticket/AddTicket";
import { PrivateRoute } from "../src/components/private-route/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EntryPage />} />
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
            <Route path="ticket/:tId" element={<Ticket />} />
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
