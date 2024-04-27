import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Ticket } from "./page/ticket/Ticket";
// import { TicketListing } from "./page/ticket-listing/TicketListing";
// import {Button} from 'react-bootstrap';
// import { Dashboard } from "./page/dashboard/Dashboard";
// import { EntryPage } from "./page/entry/EntryPage";
// import { AddTicket } from "./page/new-ticket/AddTicket";

function App() {
  return (
    <div className="App">
      {/* <EntryPage></EntryPage> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketListing /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
