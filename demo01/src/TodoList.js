import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";
import {
  changeInputAction,
  addItemAction,
  delItemAction,
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  // 更新状态
  storeChange() {
    this.setState(store.getState());
  }

  changeInputValue = (e) => {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  };

  clickBtn = () => {
    const action = addItemAction();
    store.dispatch(action);
  };

  clickBtnDel(index) {
    const action = delItemAction(index);
    store.dispatch(action);
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: "250px", marginRight: "10px" }}
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          />
          <Button type="primary" onClick={this.clickBtn}>
            增加
          </Button>
        </div>
        <div style={{ margin: " 10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={() => this.clickBtnDel(index)}>
                {item}
                {/* <Button
                  style={{ float: "right" }}
                  type="primary"
                  onClick={this.clickBtnDel(index)}
                >
                  删除
                </Button> */}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
