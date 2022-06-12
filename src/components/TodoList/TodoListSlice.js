const initState = [
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
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/changeTodoStatus": {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    default:
      return state;
  }
};

export default todoListReducer;
