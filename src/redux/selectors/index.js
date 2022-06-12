import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todo;

export const searchFilterSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;

// export const todoListRemainingSelector = (state) => {
//   const todoList = todoListSelector(state);
//   const filters = filtersSelector(state);

//   return todoList.filter((todo) =>
//     todo.name.toLowerCase().includes(filters.search)
//   );
// };

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  searchFilterSelector,
  (todoList, status, search) => {
    if (status === "All") {
      return todoList.filter((todo) =>
        todo.name.toLowerCase().includes(search)
      );
    } else if (status === "Completed") {
      return todoList.filter(
        (todo) => todo.name.toLowerCase().includes(search) && todo.completed
      );
    } else {
      return todoList.filter(
        (todo) => todo.name.toLowerCase().includes(search) && !todo.completed
      );
    }
  }
);
