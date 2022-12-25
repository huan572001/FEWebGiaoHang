import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Tooltip, Collapse } from 'antd';
import { OrderService } from '@/services/customer/Order';
import { MapService } from '@/services/map';
import auth from '@/utils/auth';
import Search from '../search';
import { informSucess, informError } from '@/components/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { routerLinks } from '@/utils';
const FormOrder = () => {
  const { Panel } = Collapse;
  const [open, setOpen] = useState(['1']);
  const [openReceiver, setOpenReceiver] = useState(['1']);
  const [data, setData] = useState({});
  const [addressReceiver, setAddressReceiver] = useState([]);
  const [addressDelivery, setAddressDelivery] = useState([]);
  const [distance, setDistance] = useState(0);
  const [viewport, setViewport] = useState({
    start: {
      logitude: null,
      latitude: null,
    },
    end: {
      logitude: null,
      latitude: null,
    },
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (viewport.end.latitude !== null && viewport.start.latitude !== null) {
      distanceAPI();
    }
  }, [viewport]);
  const distanceAPI = async () => {
    try {
      const response = await MapService.distance(viewport.start, viewport.end);
      setDistance(response.routes[0].distance);
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  const onFinishReceiver = (value) => {
    if (distance !== 0) {
      document.getElementById('sub').disabled = false;
    }
    setOpenReceiver([]);
    setViewport({
      start: viewport.start,
      end: {
        logitude: addressReceiver.center[0],
        latitude: addressReceiver.center[1],
      },
    });
    setData({
      ...data,
      addressReceiver: addressReceiver.matching_place_name,
      phoneReceiver: value.phone,
      id_Commodities: '1',
      status: '0',
    });
  };
  const onFinishDelivery = async (value) => {
    if (distance !== 0) {
      document.getElementById('sub').disabled = false;
    }
    try {
      setData({
        ...data,
        addressCustomer: addressDelivery.matching_place_name,
      });
      setOpen([]);
      setViewport({
        start: {
          logitude: addressDelivery.center[0],
          latitude: addressDelivery.center[1],
        },
        end: viewport.start,
      });

      value.addressReceiver = addressReceiver.matching_place_name;
      const response = await OrderService.addressSender(auth.getUser().id, {
        address: addressReceiver.matching_place_name,
        phone: value.phoneSender,
      });
      if (response.success) {
        //thong bao gi do
      } else {
        //thong bao that bai
      }
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  const onSubmit = async () => {
    try {
      const response = await OrderService.addOrderServices({
        nameReceiver: 'data.',
        addressReceiver: data.addressReceiver,
        phoneReceiver: '012144232',
        id_Commodities: '1',
        addressCustomer: data.addressCustomer,
        totalMoney: (distance / 1000) * 15000,
      });
      if (response.success) {
        informSucess(navigate(routerLinks('Customer')));
      } else {
        informError();
      }
    } catch (error) {}
  };
  return (
    <>
      <Collapse
        activeKey={open}
        onChange={() => setOpen((prev) => [1])}
        style={{ borderRadius: 10 }}
      >
        <Panel
          onChange={() => setOpen((prev) => [1])}
          header="Địa điểm lấy hàng"
          key="1"
        >
          <Form name="complex-form" onFinish={onFinishDelivery}>
            <Form.Item
              name="addressSender"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Không đươc để trống!',
              //   },
              // ]}
            >
              {Search(setAddressDelivery)}
            </Form.Item>

            {/* <Form.Item name="addressDetail">
              <Input
                placeholder="Chi tiết địa chỉ"
                style={{ borderRadius: 10 }}
              />
            </Form.Item> */}
            <Form.Item style={{ marginBottom: 0 }}>
              <Form.Item
                name="nameSender"
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  borderRadius: 10,
                }}
                // rules={[
                //   {
                //     required: true,
                //     message: 'Không đươc để trống!',
                //   },
                // ]}
              >
                <Input
                  disabled
                  placeholder="Tên người gửi"
                  style={{ borderRadius: 10 }}
                />
              </Form.Item>
              <Form.Item
                name="phoneSender"
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  margin: '0 8px',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Không đươc để trống!',
                  },
                ]}
              >
                <Input
                  placeholder="Số điện thoại"
                  style={{ borderRadius: 10 }}
                />
              </Form.Item>
            </Form.Item>
            <Button htmlType="submit">xac nhan</Button>
            <Button
              onClick={() => {
                setOpen([]);
              }}
            >
              huy
            </Button>
          </Form>
        </Panel>
      </Collapse>

      <Collapse
        activeKey={openReceiver}
        onChange={() => setOpenReceiver((prev) => [1])}
        style={{ borderRadius: 10 }}
      >
        <Panel
          onChange={() => setOpenReceiver((prev) => [1])}
          header="Địa điểm giao hang"
          key="1"
        >
          <Form onFinish={onFinishReceiver}>
            <Form.Item
              name="addressReceiver"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Không đươc để trống!',
              //   },
              // ]}
            >
              {Search(setAddressReceiver)}
            </Form.Item>
            {/* <Form.Item name="addressDetailReceiver">
              <Input
                placeholder="Chi tisết địa chỉ"
                style={{ borderRadius: 10 }}
              />
            </Form.Item> */}
            <Form.Item style={{ marginBottom: 0 }}>
              <Form.Item
                name="nameReceiver"
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  borderRadius: 10,
                }}
                rules={[
                  {
                    required: true,
                    message: 'Không đươc để trống!',
                  },
                ]}
              >
                <Input
                  placeholder="Tên người gửi"
                  style={{ borderRadius: 10 }}
                />
              </Form.Item>
              <Form.Item
                name="phoneReceiver"
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  margin: '0 8px',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Không đươc để trống!',
                  },
                ]}
              >
                <Input
                  placeholder="Số điện thoại"
                  style={{ borderRadius: 10 }}
                />
              </Form.Item>
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <Form.Item
                name="collect"
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  borderRadius: 10,
                }}
                rules={[
                  {
                    required: true,
                    message: 'Không đươc để trống!',
                  },
                ]}
              >
                <Input placeholder="Thu hộ" style={{ borderRadius: 10 }} />
              </Form.Item>
              <Form.Item
                name="sectors"
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  margin: '0 8px',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Không đươc để trống!',
                  },
                ]}
              >
                <Input
                  placeholder="Loại hàng hóa"
                  style={{ borderRadius: 10 }}
                />
              </Form.Item>
            </Form.Item>
            <Button htmlType="submit">xac nhan</Button>
            <Button
              onClick={() => {
                setOpenReceiver([]);
              }}
            >
              huy
            </Button>
          </Form>
        </Panel>
      </Collapse>
      {distance !== 0 ? (
        <>
          <div>khoảng cách {distance / 1000} km</div>
          <div>tổng số tiền phải trả= {(distance / 1000) * 15000}</div>
        </>
      ) : (
        <></>
      )}

      <Button
        id="sub"
        htmlType="submit"
        style={{
          backgroundColor: '#FD8D19',
          color: 'white',
          borderRadius: 10,
          width: '100%',
          height: 40,
          marginTop: 16,
        }}
        onClick={onSubmit}
        // disabled
      >
        Xác nhận
      </Button>
    </>
  );
};
export default FormOrder;
