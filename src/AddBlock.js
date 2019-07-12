import React from "react";
import {
  Popup,
  Modal,
  Form,
  Header,
  Button,
  Icon,
} from "semantic-ui-react";

class AddBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTipToolOpen: true,
      data: ""
    };
  }

  changeData(data) {
    this.setState({
      data: data
    });
  }

  handleClick = () => {
    if (this.state.data) {
      const newBlock = this.props.createBlock(this.state.data);
      this.props.addToChain(newBlock);
    }
  };

  switchTipTool(mode) {
    this.setState({
      isTipToolOpen: mode
    });
  }
  render() {
    const button = (
      <div className="add-button">
        <button
          onClick={() => this.switchTipTool(false)}
          className="ui circular icon button circle-button"
        >
          <i aria-hidden="true" className="plus icon" />
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
          open={this.state.isTipToolOpen}
          position="top right"
          trigger={button}
        />

        <Modal trigger={button} size="mini">
          <Header icon="list" content="Add a new block!" />
          <Form>
            <Modal.Content>
              <div style={{ margin: "10px 10px 10px 10px" }}>
                <Form.Input
                  required
                  value={this.state.data}
                  onChange={e => this.changeData(e.target.value)}
                  label="Data"
                />
              </div>
            </Modal.Content>
            <Modal.Actions>
              <div style={{ margin: "10px 10px 10px 10px" }}>
                <Button onClick={this.handleClick} color="green" inverted>
                  <Icon name="checkmark" /> Submit
                </Button>
              </div>
            </Modal.Actions>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default AddBlock;
