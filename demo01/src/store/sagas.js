import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionType";
import { getListAction } from "./actionCreators";

import axios from "axios";

// generator函数
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList);
}

function* getList() {
  const res = yield axios.get(
    "https://www.fastmock.site/mock/69b3423520c71a3676b168ce19ccfc20/redux/demo1/getList"
  );
  const action = getListAction(res.data.list);
  yield put(action);
}  

export default mySaga;
