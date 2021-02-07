/* eslint-disable no-debugger */
import axios from "axios";
import types from "../constants/typesToggle";

const toggleTaskSuccess = (tasks) => {
  console.log(`from success ${tasks}`)
  return(
  {
  type: types.TOGGLE_TASK_SUCCESS,
  payload: tasks,
});
}

const toggleTaskStarted = () => ({
  type: types.TOGGLE_TASK_FAILURE,
});

const toggleTaskFailure = (error) => ({
  type: types.TOGGLE_TASK_STARTED,
  payload: {
    error,
  },
});

const toggleTask = ({id, name}) => async (dispatch) => {
  dispatch(toggleTaskStarted());
  const response = await axios
  // добавть в параметры id 
    .post(`https://remembrallbot.herokuapp.com/users/${id}/finish-task`, { name } ) 
    .then((res) => {
      dispatch(toggleTaskSuccess(res.data.name));
    })
    .catch((err) => {
      dispatch(toggleTaskFailure(err.message));
    });
  return response;
};

export default toggleTask;
