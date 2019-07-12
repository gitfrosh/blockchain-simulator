import React from "react";
import { Input, Label } from "semantic-ui-react";

class MyCard extends React.Component {
  recreateHash = () => {
    console.log("recreate", this.props.block.index);
  };

  // hashIsValid = block => {
  //   return createHash(block) == block.hash;
  // };

  render() {
    return (
      <div className="ui yellow card">
        <div className="content">
          <div className="header">
            {this.props.block.index === 0
              ? "Genesis Block"
              : `#${this.props.block.index}`}
          </div>
          <div className="meta">{this.props.block.timestamp}</div>
        </div>
        <div className="content">
          <div className="description">
            <Label as="a" color="teal" ribbon>
              Previous Hash
            </Label>
            <br />
            <Input
              size="mini"
              style={{ marginBottom: "1rem", minWidth: "100%" }}
              value={this.props.block.previousHash}
            />
            <br />
            <Label as="a" color="teal" ribbon>
              Hash
            </Label>
            <br />
            <Input
              size="mini"
              style={{ marginBottom: "1rem", minWidth: "100%" }}
              value={this.props.block.hash}
            />
            <br />
            <Label as="a" color="teal" ribbon>
              Nonce
            </Label>
            <br />
            <Input
              size="mini"
              style={{ marginBottom: "1rem", minWidth: "100%" }}
              value={this.props.block.nonce}
            />
          </div>
        </div>
        {/* <div className="extra content">
          <Button onClick={this.recreateHash} fluid>
            <i aria-hidden="true" className="redo icon" /> Recreate Hash
          </Button>
        </div> */}
      </div>
    );
  }
}

export default MyCard;
