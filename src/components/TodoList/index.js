import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import Todo from "../Todo";

export default function TodoList(props) {
  const { todoList, onAddTodo } = props;
  const [todoName, setTodoName] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item) => {
          return (
            <Todo
              key={item.id}
              name={item.name}
              priority={item.priority}
              completed={item.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onInput={(e) => {
              setTodoName(e.target.value);
            }}
          />
          <Select
            defaultValue={todoPriority}
            value={todoPriority}
            onChange={(value) => {
              setTodoPriority(value);
            }}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button
            type="primary"
            onClick={() => {
              while (!todoName) {
                return;
              }

              onAddTodo(todoName, todoPriority);
              setTodoName("");
              setTodoPriority("Medium");
            }}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
