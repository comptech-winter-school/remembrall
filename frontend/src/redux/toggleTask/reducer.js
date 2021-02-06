import types from "../constants/typesToggle";

const initialState = {
  loading: false,
  tasks: [],
  error: null,
};

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.TOGGLE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload ],
        error: "",
      };
    case types.TOGGLE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
