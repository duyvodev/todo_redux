import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, searchFilterChange } from "./redux/actions/actions";
import { searchFiltersSelector, todoListSelector } from "./redux/selectors";

const { Title } = Typography;

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);
  const filters = useSelector(searchFiltersSelector);

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
      <Filters onSearchChange={onSearchChange} />
      <Divider />
      <TodoList todoList={todoList} onAddTodo={onAddTodo} />
    </div>
  );
}

export default App;
