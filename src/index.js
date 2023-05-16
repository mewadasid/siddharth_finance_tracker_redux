import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import Displayuser from "./pages/finance/financeTable/components/displayUser";
import Edituser from "./pages/finance/financeTable/components/editUser";
import Transactiontable from "./pages/finance/financeTable/components/transactionTable";
import Protected from "./pages/finance/protected/components/protectedRoute";
import { Provider } from "react-redux";
import store from "./pages/finance/redux_duck/store";
import { CookiesProvider } from "react-cookie";
import AddTransaction from "./pages/finance/transactionForm";
import RegisterForm from "./pages/finance/register";
import Loginform from "./pages/finance/login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Loginform />}></Route>
            <Route path="register" element={<RegisterForm />}></Route>
            <Route path="displayData">
              <Route
                path=""
                element={<Protected Cmp={<Transactiontable />} />}
              ></Route>
              <Route
                path="createTransaction"
                element={<Protected Cmp={<AddTransaction />} />}
              ></Route>
              <Route
                path=":id"
                element={<Protected Cmp={<Displayuser />} />}
              ></Route>
              <Route
                path="edit/:id"
                element={<Protected Cmp={<Edituser />} />}
              ></Route>
            </Route>
            <Route
              path=""
              element={<Navigate to={"/displayData"}></Navigate>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
