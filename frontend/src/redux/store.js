import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import getTasksReducer from "./getTasks/reducer";
// import addTasksReducer from "./addTasks/reducer";

const rootReducer = combineReducers({
    getTasksReducer,
    // addTasksReducer,
  })

const store = createStore(getTasksReducer, applyMiddleware(thunk));
// store.subscribe(TasksTabs);

export default store;
