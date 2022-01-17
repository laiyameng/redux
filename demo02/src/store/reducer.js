const defaultState = {
  inputValue: "hello",
  list: [],
};

export default (state = defaultState, action) => {
  if (action.type === "change_input") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_list") {
    let newState = JSON.parse(JSON.stringify(state));
    if (newState.inputValue) {
      newState.list.push(newState.inputValue);
    }
    newState.inputValue = "";
    return newState;
  }
  if (action.type === "del_list") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }
  return state;
};
