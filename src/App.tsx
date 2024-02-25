import "./App.css";
import Dashboard from "./feature/dashboard/dashboard";
import Page from "./component/page/page";

function App() {
  return (
    <div className="App">
      <Page children={<Dashboard />} />
    </div>
  );
}

export default App;
