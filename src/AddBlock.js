import React from "react";
import MyCard from "./MyCard";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function AddBlock() {
  return (
    <Modal
      trigger={
        <div class="add-button">
          <button class="ui circular icon button circle-button">
            <i aria-hidden="true" class="plus icon" />
          </button>
        </div>
      }
      header="Reminder!"
      content="Call Benjamin regarding the reports."
      actions={["Snooze", { key: "done", content: "Done", positive: true }]}
    />
  );
}

export default AddBlock;
