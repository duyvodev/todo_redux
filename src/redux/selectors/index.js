import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todo;

export const filtersSelector = (state) => state.filters;

// export const todoListRemainingSelector = (state) => {
//   const todoList = todoListSelector(state);
//   const filters = filtersSelector(state);

//   return todoList.filter((todo) =>
//     todo.name.toLowerCase().includes(filters.search)
//   );
// };

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  filtersSelector,
  (todoList, filters) => {
    return todoList.filter((todo) =>
      todo.name.toLowerCase().includes(filters.search)
    );
  }
);
