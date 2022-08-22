import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import RouteList from "./Components/Layout/RouteList";
import ProfileUser from "./Components/pages/ProfileUser";
import { store } from "./features/store";
import Dashboard from "./Components/pages/Dashboard";
import Download from "./Components/pages/Download";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          {RouteList.map((routeItem, index) => {
            return (
              <Route
                key={index}
                path={routeItem.path}
                element={<routeItem.element />}
                className={(navLink) => (navLink.isActive ? "bg-red-100" : "bg-sky-800")}
              />
            ); 
          })}
          <Route path="/ProfileUser/*" element={<ProfileUser />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="download" element={<Download />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>,

);

