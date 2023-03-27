import React, { useState } from "react";
import Nav from "../nav";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import activeReducer from "./reducers/active-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router";
const store = configureStore({
  reducer: { who: whoReducer, tuitsData: tuitsReducer, active: activeReducer },
});

function Tuiter() {
  const [page, setPage] = useState("explore");
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar page={page} />
          </div>
          <div
            className="col-10 col-md-10 col-lg-7 col-xl-6"
            style={{ position: "relative" }}
          >
            <Routes>
              <Route
                index
                path="/*"
                element={<ExploreComponent setPage={setPage} />}
              ></Route>
              <Route
                path="/home"
                element={<HomeComponent setPage={setPage} />}
              ></Route>
            </Routes>
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;
