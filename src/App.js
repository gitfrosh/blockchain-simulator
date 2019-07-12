import React from "react";
import Chain from "./Chain";
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
          <div className="ui divider" />
          <p style={{ maxWidth: "35rem" }} className="marked">
            The blockchain starts with the genesis block and can be continued by
            adding more blocks. Each block points to the block before through
            the previous block's hash. The newly created hash is the fingerprint
            of the summoned data, index, previous hash, timestamp and nonce. The
            mined nonce makes sure that the hash begins with four zeros and
            makes the block therefore "signed". <br />
            <br />
            Manipulating any data within any block of the blockchain (which can
            not be simulated (yet) in this demo) breaks the chain and results in
            invalid blocks.
          </p>
        </header>
        <Chain />
      </div>
    </div>
  );
}

export default App;
