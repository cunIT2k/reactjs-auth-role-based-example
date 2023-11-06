import { Typography } from 'antd';
import React from 'react';

const Footer: React.FC = () => {
  const { Title, Link } = Typography;
  return (
    <React.Fragment>
      <Title level={5}>
        Development by
        <Link className="author-info" href="https://www.linkedin.com/in/cunit/">
          cunit
        </Link>
      </Title>
    </React.Fragment>
  );
};

export default Footer;
