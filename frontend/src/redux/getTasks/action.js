/* eslint-disable no-debugger */
import axios from "axios";
import types from "../constants/typesShow";

const showListTasksSuccess = (tasks) => ({
  type: types.SHOW_LIST_TASKS_SUCCESS,
  payload: tasks,
});

const showListTasksStarted = () => ({
  type: types.SHOW_LIST_TASKS_STARTED,
});

const showListTasksFailure = (error) => ({
  type: types.SHOW_LIST_TASKS_FAILURE,
  payload: {
    error,
  },
});

const showListTasks = () => (dispatch) => {
  dispatch(showListTasksStarted());
  axios
    .get("https://remembrallbot.herokuapp.com/")
    .then((res) => {
      dispatch(showListTasksSuccess(res.data));
    })
    .catch((err) => {
      dispatch(showListTasksFailure(err.message));
    });
};

export default showListTasks;
