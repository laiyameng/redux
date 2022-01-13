import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionType";
import axios from "axios";

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value,
});

export const addItemAction = () => ({
  type: ADD_ITEM,
});

export const delItemAction = (index) => ({
  type: DEL_ITEM,
  index,
});

export const getListAction = (data) => ({
  type: GET_LIST,
  data,
});

export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://www.fastmock.site/mock/69b3423520c71a3676b168ce19ccfc20/redux/demo1/getList"
      )
      .then((res) => {
        const action = getListAction(res.data.list);
        dispatch(action);
      });
  };
};
