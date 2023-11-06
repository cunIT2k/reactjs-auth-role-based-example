import React from 'react';
import { Row, Col, Typography, Layout } from 'antd';

import AppFooter from './Footer';
import AppMenu from './Menu';

type Props = {
  children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
  const { Title } = Typography;
  const { Header, Footer, Content } = Layout;
  return (
    <React.Fragment>
      <Layout className="app_layout">
        <Header className="app_header">
          <Row align="middle">
            <Col flex="none">
              <div className="app_logo">
                <Title level={3}>AUTH EXAMPLE</Title>
              </div>
            </Col>
            <Col flex="auto" className="app_menu">
              <AppMenu />
            </Col>
          </Row>
        </Header>
        <Content className="app_content">{children}</Content>
        <Footer className="app_footer">
          <AppFooter />
        </Footer>
      </Layout>
    </React.Fragment>
  );
};

export default AppLayout;
