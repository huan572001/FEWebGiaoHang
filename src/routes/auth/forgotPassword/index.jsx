import { Button, Checkbox, DatePicker, Form, Input, Radio, Select } from 'antd';
import React from 'react';
import { useAuth } from '@/global';
import { useNavigate } from 'react-router';
import { routerLinks } from '@/utils';
import './index.less';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { UserService } from '@/services/auth';
import { informError, informSucess } from '@/components/Modal/Modal';
import Search from '@/routes/admin/createOrder/search';
import { useState } from 'react';
const App = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [addressDelivery, setAddressDelivery] = useState();
  const onFinish = async (values) => {
    console.log(values);
    try {
      const res = await UserService.forgotPassword(values);
      if (res?.success) {
        informSucess(() => {
          navigate(routerLinks('Login'));
        }, 'Gửi mail thành công! mật khẩu mới đã được gửi vào email của bạn!');
      } else {
        informError('Gmail không tồn tại trong hệ thống!');
      }
    } catch (error) {
      informError('Gmail không tồn tại trong hệ thống!');
    }
  };
  return (
    <>
      <div className="register">
        <div className="signup">
          <div className="signup-connect">
            <h1>Quên mật khẩu</h1>
          </div>
          <div className="signup-classic">
            <h2>Hãy nhập gmail của bạn!</h2>
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Không được để trống',
                  },
                  {
                    type: 'email',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Gmail"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Gửi mail
                </Button>

                <div onClick={() => navigate(routerLinks('Login'))}>
                  login now!
                </div>
                <div onClick={() => navigate(routerLinks('Register'))}>
                  register now!
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
