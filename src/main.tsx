import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./hoc/AppContext.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import "./styles/main.scss";
import "./i18n/i18.ts";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </Provider>
);
