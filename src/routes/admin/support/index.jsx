import { useEffect, useState } from 'react';
import { MapBox } from '@/components';
import { Button, Card, Collapse, Input, Form } from 'antd';
import './index.less';
import {
  EditOutlined,
  EllipsisOutlined,
  SendOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { data } from 'autoprefixer';

const Page = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
  });
  const [chats, setChats] = useState([]);
  // useEffect(() => {
  //   // searchAddress('2 Nguyễn Thông, Phường 6, Quận 3, Thành phố Hồ Chí Minh');
  // }, []);
  const onFinish = (values) => {
    console.log(values);
    document.getElementById('myForm').reset();
    let newData = [...chats];
    newData.push({ chat: values.chat, bot: false });
    setChats(newData);
  };

  return (
    <>
      <div
        className="site-card-border-less-wrapper support"
        style={{ display: 'flex' }}
      >
        <Card
          title="Chat trả lời tự động"
          bordered={false}
          style={{
            width: 500,
          }}
          actions={[
            <Form style={{ display: 'flex' }} onFinish={onFinish} id="myForm">
              <Form.Item
                style={{ margin: 10, marginTop: 0, width: '87%' }}
                name="chat"
              >
                <Input style={{ borderRadius: 10 }} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <button
                  //   htmlType="submit"
                  style={{
                    background: '#fff',
                    border: 'none',
                    marginLeft: '-10px',
                  }}
                >
                  <SendOutlined
                    style={{
                      marginTop: 5,
                      marginRight: 10,
                      fontSize: 20,
                      color: 'red',
                    }}
                  />
                </button>
              </Form.Item>
            </Form>,
          ]}
        >
          {chats.map((child, index) => (
            <>
              {!child.bot ? (
                <Card
                  key={index}
                  bordered={false}
                  style={{
                    background: '#0908ea',
                    color: '#fff',
                    borderRadius: 10,
                    marginBottom: 10,
                    padding: 0,
                  }}
                >
                  {child.chat}
                </Card>
              ) : (
                <Card
                  key={index}
                  bordered={false}
                  style={{
                    backgroundColor: '#ECECEC',
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                >
                  {child.chat}
                </Card>
              )}
            </>
          ))}
        </Card>
        <MapBox latitude={viewport.latitude} longitude={viewport.longitude} />
      </div>
    </>
  );
};
export default Page;
