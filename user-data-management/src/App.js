import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
// import {Button} from 'react-bootstrap';
import { Dashboard } from "./page/dashboard/Dashboard";
import { EntryPage } from "./page/entry/EntryPage";

function App() {
  return (
    <div className="App">
      {/* <EntryPage></EntryPage> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
