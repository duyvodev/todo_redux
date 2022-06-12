export const addTodoAction = (payload) => {
  return {
    type: "todoList/addTodo",
    payload,
  };
};

export const searchFilterChange = (payload) => {
  return {
    type: "filters/searchFilterChange",
    payload,
  };
};
