import { useEffect, useState } from 'react';
import { MapBox } from '@/components';
import { Button, Card, Collapse, Input, Form } from 'antd';
import './index.less';
import {
  EditOutlined,
  EllipsisOutlined,
  LoadingOutlined,
  SendOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { data } from 'autoprefixer';
import { ReportServicer } from '@/services/admin/report';
import { useAuth } from '@/global';

const Page = () => {
  const auth = useAuth();
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
  });
  const [chats, setChats] = useState([]);
  const [loadding, setLoadding] = useState(false);
  const onFinish = (values) => {
    setLoadding(true);
    document.getElementById('myForm').reset();
    let newData = [...chats];
    newData.push({ content: values.chat, status: true });
    setChats(newData);
    postReport({ content: values.chat, status: true });
    createreport(values.chat);
  };
  const getAllChat = async () => {
    try {
      const req = await ReportServicer.getAllReportById(auth.user.id);
      if (req?.success) {
        setChats(req.data);
      }
    } catch (error) {}
  };
  const createreport = async (values) => {
    try {
      const req = await ReportServicer.createreport({ content: values });
      if (!req.success) {
        postReport({ content: req.content, status: true });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const postReport = async (values) => {
    try {
      const req = await ReportServicer.postReport(values, auth.user.id);
      if (req?.success) {
        setLoadding(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllChat();
  }, []);
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
          <div>
            {chats.map((child, index) => (
              <>
                {child.status ? (
                  <div
                    style={{
                      margin: 10,
                      justifyContent: 'flex-end',
                      display: 'flex',
                    }}
                  >
                    <div className="btnCustomer" key={index}>
                      {child.content}
                    </div>
                  </div>
                ) : (
                  <div style={{ margin: 10 }}>
                    <div className="btnBot" key={index}>
                      {child.content}
                    </div>
                  </div>
                )}
              </>
            ))}
            <div className="loadding">
              {loadding ? <LoadingOutlined /> : <></>}
            </div>
          </div>
        </Card>
        <MapBox latitude={viewport.latitude} longitude={viewport.longitude} />
      </div>
    </>
  );
};
export default Page;
