import types from "../constants/typesShow";
// import initialState from "./../initialState";
// import typesAdd from "../constants/typesAdd";

const initialState = {
  loading: false,
  tasks: [],
  error: null,
};

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_LIST_TASKS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.SHOW_LIST_TASKS_SUCCESS:
      return {
        loading: false,
        tasks: action.payload,
        error: "",
      };
    case types.SHOW_LIST_TASKS_FAILURE:
      return {
        loading: false,
        tasks: [],
        error: action.payload.error,
      };
    // case typesAdd.ADD_TASK_SUCCESS:
    //   return {
    //     loading: false,
    //     tasks: [...state.tasks, action.payload],
    //     error: "",
    //   };
    default:
      return state;
  }
}
