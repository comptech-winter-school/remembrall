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

const addTask = ({ text, id }) => async (dispatch) => {
  dispatch(addTaskStarted());
  const encoded = encodeURI(text);
  const dataEncode = `description=${encoded}`;
  const response = await axios
    .post(`https://remembrallbot.herokuapp.com/users/${id}/new-task`, dataEncode)
    .then((res) => {
      dispatch(addTaskSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addTaskFailure(err.message));
    });
    return response;
};

export default addTask;
