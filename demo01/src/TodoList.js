import React, { Component } from "react";
import store from "./store";
import TodoListUI from "./TodoListUI";

import {
  changeInputAction,
  addItemAction,
  delItemAction,
  getTodoList,
  getMyListAction,
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
  componentDidMount() {
    // const action = getTodoList();
    // store.dispatch(action);
    const action = getMyListAction();
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        clickBtnDel={this.clickBtnDel}
      />
    );
  }
}

export default TodoList;
