import { Table } from "antd";
import features from "../data/features";

const columns = [
  { title: "Key", dataIndex: "key", key: "key", width: 300, fixed: "left" },
  { title: "Name", dataIndex: "name", key: "name", width: 250 },
  { title: "Tip", dataIndex: "tip", key: "tip", width: 500 },
];

const FeatureTable = ({ selectedKeys, onSelect }) => {
  const dataSource = features;

  const rowSelection = {
    selectedRowKeys: selectedKeys,
    onChange: (selectedRowKeys) => onSelect(selectedRowKeys),
  };

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowSelection={rowSelection}
      scroll={{ x: 1050 }}
      pagination={false}
    />
  );
};

export default FeatureTable;
