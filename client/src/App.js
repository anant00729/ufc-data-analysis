import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RoutesPage from "./Routes";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <RoutesPage />
      </Router>
    </div>
  );
}

export default App;
