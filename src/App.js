import React from "react";
import logo from "./logo.svg";
import Chain from "./Chain";
import { Button, Header, Image, Modal } from "semantic-ui-react";

import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>
            blockchain
            <br />
            simulator .
          </h1>
          <div class="ui divider" />
          <p class="marked">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </p>
        </header>
        <Chain />
      </div>
    </div>
  );
}

export default App;
