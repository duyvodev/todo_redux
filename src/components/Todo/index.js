import { Row, Tag, Checkbox, Input } from "antd";
import { useEffect, useState } from "react";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({
  id,
  name,
  priority,
  completed,
  onChangeStatus,
}) {
  const [checked, setChecked] = useState(completed);

  useEffect(() => {
    onChangeStatus(id);
  }, [checked]);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
