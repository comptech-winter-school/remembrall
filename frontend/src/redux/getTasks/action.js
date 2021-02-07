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

const showListTasks = (id) => async (dispatch) => {
  dispatch(showListTasksStarted());
  const response = await axios
    .get(`https://remembrallbot.herokuapp.com/users/${id}/tasks`) 
    .then((res) => {
      dispatch(showListTasksSuccess(res.data));
    })
    .catch((err) => {
      dispatch(showListTasksFailure(err.message));
    });
  return response;
};

export default showListTasks;
