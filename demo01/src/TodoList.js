import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";
import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from "./store/actionType.js";

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
    const action = {
      type: CHANGE_INPUT,
      value: e.target.value,
    };
    store.dispatch(action);
  };

  clickBtn = () => {
    const action = {
      type: ADD_ITEM,
    };
    store.dispatch(action);
  };

  clickBtnDel(index) {
    console.log(index);
    const action = {
      type: DEL_ITEM,
      index,
    };
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
