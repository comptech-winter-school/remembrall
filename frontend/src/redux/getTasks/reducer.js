import types from "../constants/typesShow";
import typesToggle from "../constants/typesToggle";

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
    // case typesToggle.TOGGLE_TASK_STARTED:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    case typesToggle.TOGGLE_TASK_SUCCESS:
      console.log(`it is${state.tasks.map((todo) => (todo.name === action.payload ? { ...todo, done: !todo.done } : todo))}`)
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map((todo) => (todo.name === action.payload ? { ...todo, done: !todo.done } : todo)),
        error: "",
      };
    // case typesToggle.TOGGLE_TASK_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload.error,
    //   };
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
