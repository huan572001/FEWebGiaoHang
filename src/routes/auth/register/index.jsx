import { Button, Checkbox, Form, Input, Select } from 'antd';
import React from 'react';
import { useAuth } from '@/global';
import { useNavigate } from 'react-router';
import { routerLinks } from '@/utils';
import './index.less';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { UserService } from '@/services/auth';
import { informSucess } from '@/components/Modal/Modal';
const App = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await UserService.registerUser(values);
      if (res.success) {
        if (values.role === 'shipper') {
        } else {
          informSucess(() => {
            navigate(routerLinks('Login'));
          });
        }
      } else {
        informError(res.msg);
      }
    } catch (error) {}
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className="register">
        <div className="signup">
          <div className="signup-connect">
            <h1>Đăng ký</h1>
          </div>
          <div className="signup-classic">
            <h2>welcome, honored guests</h2>
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="role"
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Province is required',
                  },
                ]}
              >
                <Select placeholder="Role" style={{ width: '100%' }}>
                  <Option value="customer">Ngươi Gửi</Option>
                  <Option value="shipper">Shipper</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Register
                </Button>
                Or
                <div onClick={() => navigate(routerLinks('Login'))}>
                  login now!
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
