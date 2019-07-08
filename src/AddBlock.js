import React, { useState } from "react";
import { Popup, Modal, Form, Input } from "semantic-ui-react";

function AddBlock() {
  const [isTipToolOpen, switchTipTool] = useState(true);

  const button = (
    <div class="add-button">
      <button
        onClick={() => switchTipTool(false)}
        class="ui circular icon button circle-button"
      >
        <i aria-hidden="true" class="plus icon" />
      </button>
    </div>
  );

  return (
    <div>
      <Popup
        content={
          <span>
            Add a <br />
            new block!
          </span>
        }
        open={isTipToolOpen}
        position="top right"
        trigger={button}
      />

      <Modal
        trigger={button}
        size="mini"
        header="Add a new block!"
        content={
          <div style={{ margin: "10px 10px 10px 10px" }}>
            <Form.Field required>
              <Input label="Data" />
            </Form.Field>
          </div>
        }
        actions={["Snooze", { key: "done", content: "Done", positive: true }]}
      />
    </div>
  );
}

export default AddBlock;
