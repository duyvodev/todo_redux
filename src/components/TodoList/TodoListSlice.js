import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  state: "idle",
  todo: [],
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  // reducers: {
  // addTodo: (state, action) => {
  //   state.todo.push(action.payload);
  // },
  // changeTodoStatus: (state, action) => {
  // state.todo.forEach((todo) => {
  //   if (todo.id === action.payload) {
  //     todo.completed = !todo.completed;
  //   }
  // });
  // },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todo = action.payload;
        state.status = "idle";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todo.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        let currentTodo = state.todo.find((todo) => todo.id === action.payload);
        currentTodo = action.payload;
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    return data.todos;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (updatedTodo) => {
    const res = await fetch("/api/updateTodo", {
      method: "POST",
      body: JSON.stringify(updatedTodo),
    });
    const data = await res.json();
    return data.todos;
  }
);

// export const { addTodo, changeTodoStatus } = todoListSlice.actions;
export default todoListSlice.reducer;
