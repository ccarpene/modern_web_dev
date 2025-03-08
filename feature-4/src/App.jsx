import React from "react";
import Components from "./Components/Components";
//import * as Env from "./environments";
import Parse from "parse";

// Add the JSON of the Env vars
const Env = {
  APPLICATION_ID: "sbz3OZBLJK2o8LACBZZ9yYPGeXHV4rHhugAitS4T",
  JAVASCRIPT_KEY: "Rru2V5vsS7KVgUlroYEU8WpvN2ZBrlD7tbrJLhwb",
  SERVER_URL: "https://parseapi.back4app.com/"
}

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return <Components />;
}

export default App;
