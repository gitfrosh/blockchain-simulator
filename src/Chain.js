import React from "react";
import MyCard from "./MyCard";
import AddBlock from "./AddBlock";
import { Loader } from "semantic-ui-react";
// import * from "./helpers";
import { createHash, checkNewBlockIsValid, proofOfWork } from "./helpers.js";

class Chain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genesisBlock: {
        // index: 0,
        // timestamp: new Date().toLocaleString(),
        // data: "Our genesis data",
        // previousHash: "-1",
        // nonce: 0
      },
      currentBlock: {},
      chain: []
    };
  }

  // updateBlock = blockIndex => {

  // }

  createBlock = data => {
    let newBlock = {
      timestamp: new Date().toLocaleString(),
      data: data,
      index:
        (this.state.currentBlock && this.state.currentBlock.index + 1) || 0,
      previousHash:
        (this.state.currentBlock && this.state.currentBlock.hash) || -1,
      nonce: 0
    };

    newBlock = proofOfWork(newBlock);

    return newBlock;
  };

  addToChain = (block, isGenesisBlock) => {
    if (
      isGenesisBlock ||
      checkNewBlockIsValid(block, this.state.currentBlock)
    ) {
      this.state.chain.push(block);

      this.setState({
        currentBlock: block
      });
      return true;
    }

    return false;
  };

  componentDidMount() {
    const genesisBlock = this.createBlock("Our genesis data");
    this.addToChain(genesisBlock, true);
  }

  render() {
    if (this.state.chain.length === 0) {
      return <Loader />;
    } else {
      return (
        <main style={{ marginTop: "2rem" }}>
          <div
            style={{
              display: "flex",
              overflowX: "scroll",
              overflowY: "hidden",
              scrollbarColor: "red yellow !important"
            }}
          >
            {this.state.chain.map(card => (
              <MyCard block={card} />
            ))}
          </div>
          <AddBlock
            createBlock={this.createBlock}
            addToChain={this.addToChain}
          />
        </main>
      );
    }
  }
}

export default Chain;
