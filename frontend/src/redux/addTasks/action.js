/* eslint-disable no-debugger */
import axios from "axios";
import types from "../constants/typesAdd";

const addTaskSuccess = (task) => ({
  type: types.ADD_TASK_SUCCESS,
  payload: task,
});

const addTaskStarted = () => ({
  type: types.ADD_TASK_STARTED,
});

const addTaskFailure = (error) => ({
  type: types.ADD_TASK_FAILURE,
  payload: {
    error,
  },
});

const addTask = () => ({ text, id }) => {
  return dispatch => {
  dispatch(addTaskStarted());
  axios
    .post("", {
      text,
      id,
      isCompleted: false,
    })
    .then((res) => {
      dispatch(addTaskSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addTasksFailure(err.message));
    });
  };
};

export default addTask;
