import React from "react";
import { Grid, Image, Label, Segment } from "semantic-ui-react";

function MyCard() {
  return (
    <div class="ui yellow card">
      <div class="content">
        <div class="header">Daniel</div>
        <div class="meta">Joined in 2016</div>
      </div>
      <div class="content">
        <div class="description">
          <Label as="a" color="teal" ribbon>
            Overview
          </Label>
          <div style={{ marginBottom: "1rem" }} class="ui input">
            <input type="text" placeholder="Search..." />
          </div>
          <Label as="a" color="teal" ribbon>
            Overview
          </Label>
          <div style={{ marginBottom: "1rem" }} class="ui input">
            <input type="text" placeholder="Search..." />
          </div>
          <Label as="a" color="teal" ribbon>
            Overview
          </Label>
        </div>
      </div>
      <div class="extra content">
        <i aria-hidden="true" class="user icon" />4 Friends
      </div>
    </div>
  );
}

export default MyCard;
