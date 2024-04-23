import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
// import {Button} from 'react-bootstrap';
import { EntryPage } from "./page/entry/EntryPage";

function App() {
  return (
    <div className="App">
      {/* <EntryPage></EntryPage> */}
      <DefaultLayout>//dashboard</DefaultLayout>
    </div>
  );
}

export default App;
