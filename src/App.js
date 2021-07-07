import "./App.css";
import { Provider } from "react-redux";
import store from "./common/store/store";
import RouterPage from "./components/RouterPage/RouterPage";

const token = localStorage.getItem("token");

if (!token) localStorage.setItem("token", "");

function App() {
  return (
    <Provider store={store}>
      <RouterPage />
    </Provider>
  );
}

export default App;
