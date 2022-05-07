import { Button, Card, Space } from "antd";
import useFeature from "../hooks/useFeature";
import FeatureModal from "./FeatureModal";

const TipsPanel = ({ selectedKeys }) => {
  const feature = useFeature();

  const handleShowClick = () => feature.showTips(selectedKeys);
  const handleClearClick = () => feature.clearHiddenTips();

  return (
    <Card title="Tips">
      <Space>
        <Button
          type="primary"
          disabled={!selectedKeys.length}
          onClick={handleShowClick}
        >
          Show Tips
        </Button>
        <Button onClick={handleClearClick}>Clear Hidden Tips</Button>
      </Space>
      <FeatureModal />
    </Card>
  );
};

export default TipsPanel;
