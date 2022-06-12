import { combineReducers } from "redux";
import filtersReducer from "../../components/Filters/FiltersSlice";
import todoListReducer from "../../components/TodoList/TodoListSlice";

const rootReducer = combineReducers({
  todo: todoListReducer,
  filters: filtersReducer,
});

export default rootReducer;
