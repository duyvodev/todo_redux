const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "Learn Redux",
      priority: "Medium",
      completed: false,
    },
    {
      id: 2,
      name: "Learn Java",
      priority: "High",
      completed: false,
    },
    {
      id: 3,
      name: "Learn C",
      priority: "Low",
      completed: true,
    },
  ],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      return state;
  }
};

export default todoReducer;
