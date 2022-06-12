import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useEffect, useState } from "react";

const { Search } = Input;

export default function Filters(props) {
  const { onSearchChange, onStatusChange, onPriorityChange } = props;
  const [searchText, setSearchText] = useState("");
  const [radioValue, setRadioValue] = useState("All");
  const [priorityValue, setPriorityValue] = useState([]);

  useEffect(() => {
    onSearchChange(searchText);
  }, [searchText]);

  useEffect(() => {
    onStatusChange(radioValue);
  }, [radioValue]);

  useEffect(() => {
    onPriorityChange(priorityValue);
  }, [priorityValue]);

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={searchText}
          onInput={(e) => setSearchText(e.target.value)}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          value={radioValue}
          onChange={(e) => setRadioValue(e.target.value)}
        >
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          onChange={(value) => setPriorityValue(value)}
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
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
      </Col>
    </Row>
  );
}
