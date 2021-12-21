import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RoutesPage from "./Routes";
import { createBrowserHistory } from "history";
import { GlobalProvider } from "./global/GlobalContext";

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router history={history}>
          <RoutesPage />
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
