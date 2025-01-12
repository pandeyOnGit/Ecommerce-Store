import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App"


import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { FirebaseProvider } from "./context/Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop>
      <FirebaseProvider>
      <Provider store={store}>
        <App/>
      </Provider>
      </FirebaseProvider>
    </ScrollToTop>
    <Toaster />
  </BrowserRouter>
);
