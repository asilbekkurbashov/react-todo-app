import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import "./App/styles/main.scss";
import "./i18n/i18.ts";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
);
