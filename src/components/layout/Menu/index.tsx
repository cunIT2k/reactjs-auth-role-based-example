import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Col, Menu, Row } from 'antd';
import { useLocation, useNavigate } from 'react-router';

const menuLeftItems: MenuProps['items'] = [
  {
    label: 'Home',
    key: '/',
  },
  {
    label: 'Admin',
    key: '/admin',
  },
  {
    label: 'Editor',
    key: '/editor',
  },
];

const menuRightItems: MenuProps['items'] = [
  {
    label: 'Login',
    key: '/login',
  },
];

const AppMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectKey, setSelectKey] = useState<string[]>();

  const handleSelectMenu = (e) => {
    navigate(e.key);
  };

  useEffect(() => {
    setSelectKey([location.pathname]);
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Row justify="space-between" className="main-menu">
        <Col>
          <Menu
            mode="horizontal"
            disabledOverflow
            items={menuLeftItems}
            onClick={handleSelectMenu}
            selectedKeys={selectKey}
          />
        </Col>
        <Col>
          <Menu
            mode="horizontal"
            disabledOverflow
            items={menuRightItems}
            onClick={handleSelectMenu}
            selectedKeys={selectKey}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AppMenu;
