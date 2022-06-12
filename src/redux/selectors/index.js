import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todo;

export const searchFilterSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;

// export const todoListRemainingSelector = (state) => {
//   const todoList = todoListSelector(state);
//   const filters = filtersSelector(state);

//   return todoList.filter((todo) =>
//     todo.name.toLowerCase().includes(filters.search)
//   );
// };

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  priorityFilterSelector,
  statusFilterSelector,
  searchFilterSelector,
  (todoList, priorityArr, status, search) => {
    if (!priorityArr.length) {
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
    } else {
      if (status === "All") {
        return todoList.filter(
          (todo) =>
            todo.name.toLowerCase().includes(search) &&
            priorityArr.includes(todo.priority)
        );
      } else if (status === "Completed") {
        return todoList.filter(
          (todo) =>
            todo.name.toLowerCase().includes(search) &&
            todo.completed &&
            priorityArr.includes(todo.priority)
        );
      } else {
        return todoList.filter(
          (todo) =>
            todo.name.toLowerCase().includes(search) &&
            !todo.completed &&
            priorityArr.includes(todo.priority)
        );
      }
    }
  }
);
