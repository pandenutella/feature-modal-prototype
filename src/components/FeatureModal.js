import { Modal, Tabs, Typography } from "antd";
import { useSelector } from "react-redux";
import features from "../data/features";
import useFeature from "../hooks/useFeature";
import { selectFeatures } from "../redux/modules/features/features.selector";
import FeatureModalTip from "./FeatureModalTip";

const FeatureModal = () => {
  const { toggle, hideTipsAsIs, hideTips } = useFeature();
  const { data, visible } = useSelector(selectFeatures);

  const handleDoNotShowAgainChange = (key, doNotShowAgain) =>
    toggle(key, doNotShowAgain);

  const handleOk = () => hideTips();
  const handleCancel = () => hideTipsAsIs();

  const renderTips = () => {
    if (data.length === 1) {
      const { key, doNotShowAgain } = data[0];
      const feature = {
        ...features.find((f) => f.key === key),
        doNotShowAgain,
      };

      return (
        <>
          <Typography.Title level={5} mark>
            {feature.name}
          </Typography.Title>
          <FeatureModalTip
            feature={feature}
            onDoNotShowAgainChange={handleDoNotShowAgainChange}
          />
        </>
      );
    }

    return (
      <Tabs tabPosition="left" size="small" tabBarGutter={0}>
        {features
          .filter((feature) => data.find((f) => f.key === feature.key))
          .map((feature) => {
            const { doNotShowAgain } = data.find((f) => f.key === feature.key);

            return (
              <Tabs.TabPane key={feature.key} tab={feature.name}>
                <FeatureModalTip
                  feature={{ ...feature, doNotShowAgain }}
                  onDoNotShowAgainChange={handleDoNotShowAgainChange}
                />
              </Tabs.TabPane>
            );
          })}
      </Tabs>
    );
  };

  const title = `New Feature${data.length > 1 ? "s" : ""}`;
  const bodyStyle = data.length > 1 ? { paddingLeft: 0 } : undefined;
  const width = data.length > 1 ? 800 : undefined;

  return (
    <Modal
      title={title}
      visible={visible}
      cancelButtonProps={{ hidden: true }}
      bodyStyle={bodyStyle}
      width={width}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {renderTips()}
    </Modal>
  );
};

export default FeatureModal;
