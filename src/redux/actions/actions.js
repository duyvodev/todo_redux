export const addTodoAction = (payload) => {
  return {
    type: "todoList/addTodo",
    payload,
  };
};

export const changeTodoStatus = (payload) => {
  return {
    type: "todoList/changeTodoStatus",
    payload,
  };
};

export const searchFilterChange = (payload) => {
  return {
    type: "filters/searchFilterChange",
    payload,
  };
};

export const statusFilterChange = (payload) => {
  return {
    type: "filters/statusFilterChange",
    payload,
  };
};

export const priorityFilterChange = (payload) => {
  return {
    type: "filters/priorityFilterChange",
    payload,
  };
};
