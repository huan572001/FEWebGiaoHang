import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Tooltip, Collapse, Select } from 'antd';
import { OrderService } from '@/services/customer/Order';
import { MapService } from '@/services/map';
import Search from '../search';
import { informSucess, informError } from '@/components/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { routerLinks } from '@/utils';
import { values } from 'lodash';
import { UserService } from '@/services/auth';
import { useAuth } from '@/global';
const FormOrder = ({ infoUser }) => {
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
  const auth = useAuth();
  const [commodities, setCommodities] = useState([]);
  const [coin, setCoin] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    getCommodities();
  }, []);
  useEffect(() => {
    if (viewport.end.latitude !== null && viewport.start.latitude !== null) {
      distanceAPI();
    }
  }, [viewport]);

  const getCommodities = async () => {
    try {
      const req = await OrderService.getCommodities();
      if (req.success) {
        setCommodities(req.commodities);
      }
    } catch (error) {}
  };
  const distanceAPI = async () => {
    try {
      const response = await MapService.distance(viewport.start, viewport.end);
      setDistance(response.routes[0].distance);
      const com = commodities.filter((ele) => {
        return ele.id === data.id_Commodities;
      });
      setCoin((response.routes[0].distance / 1000) * com[0]?.cost);
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
      phoneReceiver: value.phoneReceiver,
      id_Commodities: value.commodities,
      nameReceiver: value.nameReceiver,
      status: '0',
    });
  };
  const onFinishDelivery = async (value) => {
    console.log(value);
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
      const response = await OrderService.addressSender(auth?.user?.infor?.id, {
        address: addressDelivery.matching_place_name,
        phone: value.phoneSender,
      });
      if (response.success) {
        // setInfoUser('');
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
        ...data,
        totalMoney: coin,
      });
      if (response.success) {
        informSucess(navigate(routerLinks('Customer')));
      } else {
        informError();
      }
    } catch (error) {}
  };
  const fomat = () => {
    const op = [];
    commodities.forEach((child) => {
      op.push({
        value: child.id,
        label: child.name + ' gi??: ' + child.cost,
      });
    });
    return op;
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
          header="?????a ??i???m l???y h??ng"
          key="1"
        >
          <Form
            name="complex-form"
            onFinish={onFinishDelivery}
            initialValues={{
              addressSender: infoUser?.address,
              nameSender: infoUser?.fullname,
              phoneSender: infoUser?.phone,
            }}
          >
            <Form.Item
              name="addressSender"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Kh??ng ??????c ????? tr???ng!',
              //   },
              // ]}
            >
              {Search(setAddressDelivery, infoUser?.address)}
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
              <Form.Item
                name="nameSender"
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  borderRadius: 10,
                }}
              >
                <Input
                  placeholder="T??n ng?????i g???i"
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
                    message: 'Kh??ng ??????c ????? tr???ng!',
                  },
                ]}
              >
                <Input
                  placeholder="S??? ??i???n tho???i"
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
          header="?????a ??i???m giao hang"
          key="1"
        >
          <Form onFinish={onFinishReceiver}>
            <Form.Item
              name="addressReceiver"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Kh??ng ??????c ????? tr???ng!',
              //   },
              // ]}
            >
              {Search(setAddressReceiver)}
            </Form.Item>
            {/* <Form.Item name="addressDetailReceiver">
              <Input
                placeholder="Chi tis???t ?????a ch???"
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
                    message: 'Kh??ng ??????c ????? tr???ng!',
                  },
                ]}
              >
                <Input
                  placeholder="T??n ng?????i nh???n"
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
                    message: 'Kh??ng ??????c ????? tr???ng!',
                  },
                ]}
              >
                <Input
                  placeholder="S??? ??i???n tho???i"
                  style={{ borderRadius: 10 }}
                />
              </Form.Item>
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <Form.Item
                name="commodities"
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  margin: '0 8px',
                }}
                rules={[
                  {
                    required: true,
                    message: 'Kh??ng ??????c ????? tr???ng!',
                  },
                ]}
              >
                <Select
                  placeholder="lo???i h??ng"
                  style={{
                    width: 120,
                  }}
                  options={fomat()}
                />
              </Form.Item>
            </Form.Item>
            <Button htmlType="submit">X??c nh???n</Button>
            <Button
              onClick={() => {
                setOpenReceiver([]);
              }}
            >
              H???y
            </Button>
          </Form>
        </Panel>
      </Collapse>
      {distance !== 0 ? (
        <>
          <div>Kho???ng c??ch {distance / 1000} km</div>
          <div>T???ng s??? ti???n ph???i tr???= {coin}</div>
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
        X??c nh???n
      </Button>
    </>
  );
};
export default FormOrder;
