import React from "react";
import { Input, Icon, Popup, Label } from "semantic-ui-react";
import { hashIsValid } from "./helpers.js";

class MyCard extends React.Component {
  recreateHash = () => {
    console.log("recreate", this.props.block.index);
  };

  render() {
    const isValid = hashIsValid(this.props.block);

    return (
      <div className="ui yellow card">
        <div className="content">
          {isValid ? (
            <Popup
              content="Block is valid/signed"
              trigger={
                <Icon
                  circular
                  style={{ color: "green", float: "right" }}
                  name="check"
                />
              }
            />
          ) : (
            <Popup
              content="Block is invalid/unsigned"
              trigger={
                <Icon
                  circular
                  style={{ color: "red", float: "right" }}
                  name="x"
                />
              }
            />
          )}
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
              Data
            </Label>
            <br />
            <Input
              size="mini"
              style={{ marginBottom: "1rem", minWidth: "100%" }}
              value={this.props.block.data}
            />
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
