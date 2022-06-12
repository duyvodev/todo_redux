export const todoListSelector = (state) => {
  const todoList = state.todo.todoList;
  const filters = state.todo.filters;

  return todoList.filter((todo) =>
    todo.name.toLowerCase().includes(filters.search)
  );
};

export const searchFiltersSelector = (state) => state.todo.filters;
