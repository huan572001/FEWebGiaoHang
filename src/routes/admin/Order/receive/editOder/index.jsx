import React, { useEffect, useState } from 'react';
import { MapBox } from '@/components';
import { Button, Card, Collapse, Form, Input, Select } from 'antd';
import { values } from 'lodash';
import Search from '@/routes/admin/createOrder/search';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CustomerReceiveService } from '@/services/customer/receive';
import { MapService } from '@/services/map';
import { informError, informSucess } from '@/components/Modal/Modal';
import { OrderService } from '@/services/customer/Order';
import { routerLinks } from '@/utils';

const Page = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
  });
  const [commodities, setCommodities] = useState([]);
  const [addressReceiver, setAddressReceiver] = useState([]);
  const [addressDelivery, setAddressDelivery] = useState([]);
  const [distance, setDistance] = useState(0);
  const [coin, setCoin] = useState(0);
  const navigate = useNavigate();
  const id = useParams();
  const data = useLocation();
  const [com, setCom] = useState(1);

  useEffect(() => {
    if (addressDelivery.length === 0 || addressReceiver.length === 0) {
      return;
    } else {
      distanceAPI();
    }
  }, [addressReceiver, addressDelivery]);
  useEffect(() => {
    getCommodities();
  }, []);
  useEffect(() => {
    if (distance !== 0) {
      const com1 = commodities.filter((ele) => {
        return ele.id === com;
      });
      setCoin((distance / 1000) * com1[0]?.cost);
    }
  }, [com]);
  const distanceAPI = async () => {
    try {
      const response = await MapService.distance(
        {
          logitude: addressDelivery.center[0],
          latitude: addressDelivery.center[1],
        },
        {
          logitude: addressReceiver.center[0],
          latitude: addressReceiver.center[1],
        }
      );
      const com1 = commodities.filter((ele) => {
        return ele.id === com;
      });
      setCoin((response.routes[0].distance / 1000) * com1[0]?.cost);
      setDistance(response.routes[0].distance);
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  const updateOrder = async (data) => {
    try {
      const req = await OrderService.updateOrder(id, data);
      if (req.success) {
        informSucess(navigate(routerLinks('Qu???n l?? ????n h??ng')));
      }
    } catch (error) {
      console.log(error);
      informError();
    }
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
  const getCommodities = async () => {
    try {
      const req = await OrderService.getCommodities();
      if (req.success) {
        setCommodities(req.commodities);
      }
    } catch (error) {}
  };
  const onFinish = (values) => {
    updateOrder({
      nameReceiver: values.nameReceiver,
      addressReceiver: addressReceiver.matching_place_name,
      phoneReceiver: values.phoneReceiver,
      addressCustomer: addressDelivery.matching_place_name,
      id_Commodities: '1',
      totalMoney: coin,
    });
  };
  const oncom = (e) => {
    setCom(e);
  };
  return (
    <>
      <div
        className="site-card-border-less-wrapper"
        style={{ display: 'flex' }}
      >
        <Card
          bordered={false}
          style={{
            width: 500,
          }}
        >
          <div style={{ display: 'flex' }}>
            <div
              style={{
                backgroundColor: 'blue',
                borderRadius: '50%',
                width: 10,
                height: 10,
              }}
            ></div>
            <Card
              bordered={false}
              style={{
                width: 450,
                backgroundColor: '#ECECEC',
                borderRadius: 10,
              }}
            >
              <Form
                name="complex-form"
                onFinish={onFinish}
                initialValues={{
                  addressSender: data?.state?.info?.addressCustomer,
                  nameSender: data?.state?.info?.Customer?.fullname,
                  phoneSender: data?.state?.info?.Customer?.phone,
                  addressReceiver: data?.state?.info?.addressReceiver,
                  nameReceiver: data?.state?.info?.nameReceiver,
                  phoneReceiver: data?.state?.info?.phoneReceiver,
                  sectors: data?.state?.info?.id_Commodities,
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
                  {/* <Input
                    placeholder="?????a ch??? ng?????i g???i"
                    style={{ borderRadius: 10 }}
                  /> */}
                  {Search(
                    setAddressDelivery,
                    data?.state?.info?.addressCustomer
                  )}
                  {/* {searchAddress()} */}
                </Form.Item>
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
                    //     message: 'Kh??ng ??????c ????? tr???ng!',
                    //   },
                    // ]}
                  >
                    <Input
                      disabled
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
                <Form.Item name="addressReceiver">
                  {Search(
                    setAddressReceiver,
                    data?.state?.info?.addressReceiver
                  )}
                </Form.Item>

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
                      placeholder="T??n ng?????i g???i"
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
                    name="sectors"
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
                      defaultValue={{
                        value: commodities[0]?.id,
                        label:
                          commodities[0]?.name +
                          ' gi??: ' +
                          commodities[0]?.cost,
                      }}
                      placeholder="lo???i h??ng"
                      style={{
                        width: 120,
                      }}
                      onChange={oncom}
                      options={fomat()}
                    />
                  </Form.Item>
                </Form.Item>
                {distance !== 0 ? (
                  <>
                    <div>kho???ng c??ch {distance / 1000} km</div>
                    <div>t???ng s??? ti???n ph???i tr???= {coin}</div>
                  </>
                ) : (
                  <></>
                )}
                <Button htmlType="submit">xac nhan</Button>
              </Form>
            </Card>
          </div>
        </Card>
        <MapBox latitude={viewport.latitude} longitude={viewport.longitude} />
      </div>
    </>
  );
};
export default Page;
