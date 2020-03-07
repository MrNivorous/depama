import React from "react";
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import "./App.css";

import drizzleOptions from "./drizzleOptions.js";

import Header from "./Header";
import Loading from "./Loading.js";
import SimpleMap from "./Map.js";
import Account from "./Account.js";

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const App = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="app">
        <DrizzleProvider drizzle={drizzle}>
          <Loading>
            <Account />
            <SimpleMap />
          </Loading>
        </DrizzleProvider>
      </div>
    </div>
  );
};

export default App;
