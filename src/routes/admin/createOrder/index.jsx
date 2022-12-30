import React, { useEffect, useState } from 'react';
import { MapBox } from '@/components';
import { Button, Card, Collapse } from 'antd';
import FormOrder from './form';
import { UserService } from '@/services/auth';

const Page = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
  });
  const [infoUser, setInfoUser] = useState(undefined);
  const getUser = async () => {
    try {
      const req = await UserService.getCustomerById();
      setInfoUser(req?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getUser();
  }, []);
  // useEffect(() => {
  //   // searchAddress('2 Nguyễn Thông, Phường 6, Quận 3, Thành phố Hồ Chí Minh');
  // }, []);
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
              {infoUser === undefined ? ' ' : <FormOrder infoUser={infoUser} />}
            </Card>
          </div>
        </Card>
        <MapBox latitude={viewport.latitude} longitude={viewport.longitude} />
      </div>
    </>
  );
};
export default Page;
