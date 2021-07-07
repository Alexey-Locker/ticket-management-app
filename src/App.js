import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form/Form";
function App() {
  return (
    <Router>
      <Route path="/">
        <Form />
      </Route>
    </Router>
  );
}

export default App;
