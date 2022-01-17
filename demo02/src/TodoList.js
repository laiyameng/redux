import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
  const { inputValue, inputChange, addBtn, list, delBtn } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={inputChange} />
        <button onClick={addBtn}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => delBtn(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      const action = { type: "change_input", value: e.target.value };
      dispatch(action);
    },
    addBtn() {
      const action = { type: "add_list" };
      dispatch(action);
    },
    delBtn(index) {
      const action = { type: "del_list", value: index };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
