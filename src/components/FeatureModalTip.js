import { Checkbox, Typography } from "antd";

const FeatureModalTip = ({ feature, onDoNotShowAgainChange }) => (
  <>
    <Typography.Paragraph>{feature.tip}</Typography.Paragraph>
    <Checkbox
      checked={feature.doNotShowAgain}
      onChange={({ target }) =>
        onDoNotShowAgainChange(feature.key, target.checked)
      }
    >
      Do not show this again
    </Checkbox>
  </>
);

export default FeatureModalTip;
