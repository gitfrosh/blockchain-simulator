import React from "react";
import MyCard from "./MyCard";
import AddBlock from "./AddBlock";
import { Button, Header, Image, Modal } from "semantic-ui-react";
// import * from "./helpers";
import { createHash, checkNewBlockIsValid, proofOfWork } from "./helpers.js";

class Chain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genesisBlock: {
        index: 0,
        timestamp: new Date().toLocaleString(),
        data: "Our genesis data",
        previousHash: "-1",
        nonce: 0
      },
      currentBlock: {},
      chain: []
    };
  }

  createBlock = data => {
    let newBlock = {
      timestamp: new Date().getTime(),
      data: data,
      index: this.state.currentBlock.index + 1,
      previousHash: this.state.currentBlock.hash,
      nonce: 0
    };

    newBlock = proofOfWork(newBlock);

    return newBlock;
  };

  addToChain(block) {
    if (checkNewBlockIsValid(block, this.state.currentBlock)) {
      this.state.chain.push(block);
      this.setState({
        currentBlock: block
      });
      return true;
    }

    return false;
  }

  componentDidMount() {
    let genesisBlock = Object.assign(this.state.genesisBlock); // Pull the entire items object out. Using object.assign is a good idea for objects.
    genesisBlock.hash = createHash(this.state.genesisBlock); // update the items object as needed
    this.setState({ genesisBlock }); // Put back in state
    this.state.chain.push(genesisBlock);
    this.setState({
      currentBlock: genesisBlock
    });
  }

  render() {
    console.log(this.state);

    return (
      <main style={{ marginTop: "2rem" }}>
        <div
          style={{
            display: "flex",
            overflowX: "scroll",
            overflowY: "hidden"
          }}
        >
          {this.state.chain.map(card => (
            <MyCard block={card} />
          ))}
        </div>
        <AddBlock createBlock={this.createBlock} addToChain={this.addToChain} />
      </main>
    );
  }
}

export default Chain;
