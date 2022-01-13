import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from "./actionType";

const defaultState = {
  inputValue: " Write Something",
  list: ["1. 起床", "2. 洗漱", "3. 吃饭", "4. 上班"],
};

export default (state = defaultState, action) => {
  // reducer里只能接收state，不能改变state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    if (newState.inputValue) {
      newState.list.push(newState.inputValue);
    }
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DEL_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  return state;
};
