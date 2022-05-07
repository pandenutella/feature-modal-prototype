import { Card } from "antd";
import FeatureTable from "./FeatureTable";

const FeaturesPanel = ({ selectedKeys, onSelect }) => (
  <Card title="Features" bodyStyle={{ padding: 0 }}>
    <FeatureTable selectedKeys={selectedKeys} onSelect={onSelect} />
  </Card>
);

export default FeaturesPanel;
