import React from 'react';
import type { MenuProps } from 'antd';
import { Col, Menu, Row } from 'antd';

const menuLeftItems: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Admin',
    key: 'admin',
  },
  {
    label: 'Editor',
    key: 'editor',
  },
];

const menuRightItems: MenuProps['items'] = [
  {
    label: 'SignUp',
    key: 'signup',
  },
  {
    label: 'Login',
    key: 'login',
  },
];

const AppMenu: React.FC = () => {
  return (
    <React.Fragment>
      <Row justify="space-between" className="main-menu">
        <Col>
          <Menu mode="horizontal" disabledOverflow items={menuLeftItems} />
        </Col>
        <Col>
          <Menu mode="horizontal" disabledOverflow items={menuRightItems} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AppMenu;
