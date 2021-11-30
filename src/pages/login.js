import React from 'react';
import Layout from '@theme/Layout';
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './App.css';
import './login.css'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

function Login() {
  return (
    <Layout title="Setting">
      <div class="title">
      <div class="title-left">
<image alt="" ></image>
      </div>
      <div class="title-right">
      <div class="rich-text">
      <p class="rich-text-p"> 
      <span
        class="text">Ant Design Pro
      </span>
      </p>
      </div>
      </div>
     </div>
    </Layout>
  );
}

export default Login;