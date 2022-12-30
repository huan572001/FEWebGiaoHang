import { useAuth } from '@/global';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Row,
  Form,
  Radio,
  DatePicker,
  Input,
} from 'antd';
import { useState } from 'react';
import moment from 'moment';
import { ProfileCustomerService } from '@/services/customer/Profile';
import { informError, informSucess } from '../Modal/Modal';
import Search from '@/routes/admin/createOrder/search';
import { ProfileShiperService } from '@/services/shipper/profile';
import { LockOutlined } from '@ant-design/icons';
import { Await } from 'react-router-dom';
import { UserService } from '@/services/auth';

const info = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [addressDelivery, setAddressDelivery] = useState([]);
  const [openPass, setOpenPass] = useState('none');
  const auth = useAuth();
  const [form] = Form.useForm();

  const updateInfoCustomer = async (data) => {
    try {
      const req = await ProfileCustomerService.updateInfo(
        auth?.user?.infor?.id,
        data
      );
      if (req.success) {
        informSucess();
        setComponentDisabled(true);
      }
    } catch (error) {
      informError();
    }
  };
  const updateInfoShipper = async (data) => {
    try {
      const req = await ProfileShiperService.updateInfo(
        auth?.user?.infor?.id,
        data
      );
      if (req.success) {
        informSucess();
        setComponentDisabled(true);
      }
    } catch (error) {
      informError();
    }
  };
  const onFinish = (e) => {
    if (auth.user.data.role === 'customer') {
      updateInfoCustomer({
        fullname: e?.fullname,
        address: addressDelivery?.matching_place_name,
        phone: e?.phone,
        gender: e?.gender ? '1' : '0',
        birthday: e?.birthday.format('YYYY-MM-DD'),
      });
    } else if (auth.user.data.role === 'shipper') {
      updateInfoShipper({
        fullname: e?.fullname,
        address: addressDelivery?.matching_place_name,
        phone: e?.phone,
        gender: e?.gender ? '1' : '0',
        birthday: e?.birthday.format('YYYY-MM-DD'),
      });
    }
  };
  const onFinishPassword = async (e) => {
    try {
      const req = await UserService.resetPassword(e);
      if (req.success) {
        informSucess(() => {
          setOpenPass('none');
        });
      } else {
        informError();
      }
    } catch (error) {
      informError();
    }
  };
  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Thông tin cá nhân" bordered={false}>
              <Form
                onFinish={onFinish}
                disabled={componentDisabled}
                initialValues={{
                  fullname: auth?.user?.infor?.fullname,
                  address: auth?.user?.infor?.address,
                  phone: auth?.user?.infor?.phone,
                  gender: auth?.user?.infor?.gender,
                  birthday: moment(auth?.user?.infor?.birthday),
                }}
              >
                <Form.Item
                  label="Họ Tên:"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: 'Không được để trống!',
                    },
                  ]}
                >
                  <Input placeholder="Họ và tên" />
                </Form.Item>
                <Form.Item
                  label="Địa chỉ:"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: 'Không được để trống!',
                    },
                  ]}
                >
                  {/* <Input placeholder="Địa chỉ" /> */}
                  {Search(setAddressDelivery, auth?.user?.infor?.address)}
                </Form.Item>
                <Form.Item
                  label="SDT:"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Không được để trống!',
                    },
                  ]}
                >
                  <Input type="phone" placeholder="Số điện thoại" />
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="Giới tính: "
                  rules={[
                    {
                      required: true,
                      message: 'Không được để trống!',
                    },
                  ]}
                >
                  <Radio.Group>
                    <Radio value={true}>Nam</Radio>
                    <Radio value={false}>Nữ</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="birthday" label="DatePicker">
                  <DatePicker />
                </Form.Item>
                <Form.Item style={{ display: componentDisabled ? 'none' : '' }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Xác Nhận
                  </Button>
                  <Button
                    onClick={() => {
                      setComponentDisabled(true);
                    }}
                  >
                    Hủy
                  </Button>
                </Form.Item>
              </Form>
              <Button
                style={{ display: componentDisabled ? '' : 'none' }}
                onClick={() => {
                  setComponentDisabled(false);
                }}
              >
                Chỉnh sửa
              </Button>
              <Button
                style={{ display: componentDisabled ? '' : 'none' }}
                onClick={() => {
                  setOpenPass('');
                }}
              >
                Đổi mật khẩu
              </Button>
            </Card>
          </Col>
          <Col span={8} style={{ display: openPass }}>
            <Card title="Đổi mật khẩu" bordered={false}>
              <Form onFinish={onFinishPassword}>
                <Form.Item
                  name="passwordOld"
                  label="passwordOld"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="passwordNew"
                  label="passwordNew"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="passwordConfirm"
                  label="Confirm Password"
                  dependencies={['passwordNew']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('passwordNew') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            'The two passwords that you entered do not match!'
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Xác Nhận
                </Button>
                <Button
                  onClick={() => {
                    setOpenPass('none');
                    form.resetFields();
                  }}
                >
                  Hủy
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default info;
