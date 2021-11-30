import React from 'react';
import Layout from '@theme/Layout';
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './App.css';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

function Setting() {
  return (
    <Layout title="Setting">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
        <Button type="primary" onClick={openNotification}>Button</Button>
      </div>
    </Layout>
  );
}

export default Setting;