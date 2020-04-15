import React from "react";
import styles from "./index.less";
import { Badge, Button, Switch } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const ButtonGroup = Button.Group;

class Demo extends React.Component {
  state = {
    count: 5,
    show: true
  };

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };

  onChange = (show: boolean) => {
    this.setState({ show });
  };

  render() {
    return (
      <div>
        <div>
          <Badge count={this.state.count}>
            <a href="#" className="head-example" />
          </Badge>
          <ButtonGroup>
            <Button onClick={this.decline}>
              <MinusOutlined />
            </Button>
            <Button onClick={this.increase}>
              <PlusOutlined />
            </Button>
          </ButtonGroup>
        </div>
        <div style={{ marginTop: 10 }}>
          <Badge dot={this.state.show}>
            <a href="#" className="head-example" />
          </Badge>
          <Switch onChange={this.onChange} checked={this.state.show} />
        </div>
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-badge-demo-change">
      <Demo />
    </div>
  </div>
);
