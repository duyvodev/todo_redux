import { Divider, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  priorityFilterChange,
  searchFilterChange,
  statusFilterChange,
} from "./components/Filters/filtersSlice";
import Filters from "./components/Filters/index";
import TodoList from "./components/TodoList/index";
import {
  addNewTodo,
  addTodo,
  changeTodoStatus,
  fetchTodos,
  updateTodo,
} from "./components/TodoList/todoListSlice";
import { setupServer } from "./fakeApis";
import { todoListRemainingSelector } from "./redux/selectors";

const { Title } = Typography;

if (process.env.NODE_ENV === "development") {
  setupServer();
}

function App() {
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const dispatch = useDispatch();
  const todoList = useSelector(todoListRemainingSelector);
  const onAddTodo = (name, priority) => {
    dispatch(
      // addTodo({
      //   id: todoList.length + 1,
      //   name,
      //   priority,
      //   completed: false,
      // })

      addNewTodo({
        id: todoList.length + 1,
        name,
        priority,
        completed: false,
      })
    );
    // dispatch(
    //   addTodos({
    //     id: todoList.length + 1,
    //     name,
    //     priority,
    //     completed: false,
    //   })
    // );
  };

  const onChangeTodoStatus = (id) => {
    // dispatch(changeTodoStatus(id));
    dispatch(updateTodo(id));
  };

  const onSearchChange = (text) => {
    dispatch(searchFilterChange(text));
  };

  const onStatusChange = (status) => {
    dispatch(statusFilterChange(status));
  };

  const onPriorityChange = (priorityArr) => {
    dispatch(priorityFilterChange(priorityArr));
  };

  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters
        onSearchChange={onSearchChange}
        onStatusChange={onStatusChange}
        onPriorityChange={onPriorityChange}
      />
      <Divider />
      <TodoList
        todoList={todoList}
        onChangeTodoStatus={onChangeTodoStatus}
        onAddTodo={onAddTodo}
      />
    </div>
  );
}

export default App;
