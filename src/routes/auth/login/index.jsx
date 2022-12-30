import { Button, Checkbox, Form, Input } from 'antd';
import { UserService } from '@/services/auth';
import { useAuth } from '@/global';
import { useNavigate } from 'react-router';
import { routerLinks } from '@/utils';
import './index.less';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { informError } from '@/components/Modal/Modal';
const App = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await UserService.login({
        ...values,
        isRemember: values.isRemember !== undefined,
      });
      if (res.success) {
        if (res.data.role === 'customer') {
          // infoUser(res);
          auth.login(res);
          navigate(routerLinks('Customer'), { replace: true });
        } else if (res.data.role === 'shipper') {
          auth.login(res);
          navigate(routerLinks('Shipper'), { replace: true });
        } else if (res.data.role === 'admin') {
          auth.login(res);
          navigate(routerLinks('Admin'), { replace: true });
        }
      } else {
        informError('Tài khoản hoặc mật khẩu sai!');
      }
    } catch (err) {
      informError(
        err.response.data.msg ===
          'Fail at auth controller: ReferenceError: reject is not defined'
          ? 'Tài khoản hoặc mật khẩu sai!'
          : 'Tài khoản hoặc mật khẩu sai!'
      );
    }
  };
  return (
    <>
      <div className="login">
        <div className="signup">
          <div className="signup-connect">
            <h1>Login</h1>
          </div>
          <div className="signup-classic">
            <h2>welcome, honored guests</h2>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
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
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a
                  onClick={() => navigate(routerLinks('forgotPassword'))}
                  className="login-form-forgot"
                >
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or{' '}
                <div onClick={() => navigate(routerLinks('Register'))}>
                  register now!
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      {/* <Form
        name="basic"
        size="middle"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
    </>
  );
};
export default App;
