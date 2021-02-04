import types from "../constants/typesAdd";

const initialState = {
  loading: false,
  tasks: [],
  error: null,
};

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload ],
        error: "",
      };
    case types.SHOW_LIST_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
