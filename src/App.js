import { Divider, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
import {
  addTodoAction,
  searchFilterChange,
  statusFilterChange,
} from "./redux/actions/actions";
import { filtersSelector, todoListRemainingSelector } from "./redux/selectors";

const { Title } = Typography;

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoListRemainingSelector);

  const onAddTodo = (name, priority) => {
    dispatch(
      addTodoAction({
        id: todoList.length + 1,
        name,
        priority,
        completed: false,
      })
    );
  };

  const onSearchChange = (text) => {
    dispatch(searchFilterChange(text));
  };

  const onStatusChange = (status) => {
    dispatch(statusFilterChange(status));
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
      />
      <Divider />
      <TodoList todoList={todoList} onAddTodo={onAddTodo} />
    </div>
  );
}

export default App;
