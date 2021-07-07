import "./App.css";
import { Provider } from "react-redux";
import store from "./common/store/store";
import RouterPage from "./components/RouterPage/RouterPage";
import { BrowserRouter as Router } from "react-router-dom";
const token = localStorage.getItem("token");

if (!token) localStorage.setItem("token", "");

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterPage />
      </Router>
    </Provider>
  );
}

export default App;
