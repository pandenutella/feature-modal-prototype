import { Col, Layout, Row } from "antd";
import { useState } from "react";
import FeaturesPanel from "./components/FeaturesPanel";
import TipsPanel from "./components/TipsPanel";

const App = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header></Layout.Header>
      <Layout.Content style={{ padding: 20 }}>
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <FeaturesPanel
              selectedKeys={selectedKeys}
              onSelect={setSelectedKeys}
            />
          </Col>
          <Col span={12}>
            <TipsPanel selectedKeys={selectedKeys} />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default App;
