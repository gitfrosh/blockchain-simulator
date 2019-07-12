import React from "react";
import { Grid, Input, Label, Segment } from "semantic-ui-react";

class MyCard extends React.Component {
  render() {
    return (
      <div class="ui yellow card">
        <div class="content">
          <div class="header">
            {this.props.block.index === 0
              ? "Genesis Block"
              : `#${this.props.block.index}`}
          </div>
          <div class="meta">{this.props.block.timestamp}</div>
        </div>
        <div class="content">
          <div class="description">
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
        <div class="extra content">
          <i aria-hidden="true" class="user icon" />4 Friends
        </div>
      </div>
    );
  }
}

export default MyCard;
