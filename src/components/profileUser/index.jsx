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
            <Card title="Th??ng tin c?? nh??n" bordered={false}>
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
                  label="H??? T??n:"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: 'Kh??ng ???????c ????? tr???ng!',
                    },
                  ]}
                >
                  <Input placeholder="H??? v?? t??n" />
                </Form.Item>
                <Form.Item
                  label="?????a ch???:"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: 'Kh??ng ???????c ????? tr???ng!',
                    },
                  ]}
                >
                  {/* <Input placeholder="?????a ch???" /> */}
                  {Search(setAddressDelivery, auth?.user?.infor?.address)}
                </Form.Item>
                <Form.Item
                  label="SDT:"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Kh??ng ???????c ????? tr???ng!',
                    },
                  ]}
                >
                  <Input type="phone" placeholder="S??? ??i???n tho???i" />
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="Gi???i t??nh: "
                  rules={[
                    {
                      required: true,
                      message: 'Kh??ng ???????c ????? tr???ng!',
                    },
                  ]}
                >
                  <Radio.Group>
                    <Radio value={true}>Nam</Radio>
                    <Radio value={false}>N???</Radio>
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
                    X??c Nh???n
                  </Button>
                  <Button
                    onClick={() => {
                      setComponentDisabled(true);
                    }}
                  >
                    H???y
                  </Button>
                </Form.Item>
              </Form>
              <Button
                style={{ display: componentDisabled ? '' : 'none' }}
                onClick={() => {
                  setComponentDisabled(false);
                }}
              >
                Ch???nh s???a
              </Button>
              <Button
                style={{ display: componentDisabled ? '' : 'none' }}
                onClick={() => {
                  setOpenPass('');
                }}
              >
                ?????i m???t kh???u
              </Button>
            </Card>
          </Col>
          <Col span={8} style={{ display: openPass }}>
            <Card title="?????i m???t kh???u" bordered={false}>
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
                  X??c Nh???n
                </Button>
                <Button
                  onClick={() => {
                    setOpenPass('none');
                    form.resetFields();
                  }}
                >
                  H???y
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
