import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ReportServicer } from '@/services/admin/report';
import Chat from './support/index';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUesr] = useState('');
  const getAllUser = async () => {
    try {
      const req = await ReportServicer.getAllUserReport();
      console.log(req, 'dsada');
      if (req.success) {
        setData(req.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <div
          style={{
            width: 250,
            background: 'red',
            borderRadius: '10px 10px 0px 0px',
            height: 50,
          }}
        >
          danh sach Report
        </div>
        <div
          id="scrollableDiv"
          style={{
            width: 250,
            height: 750,
            overflow: 'auto',
            padding: '0 16px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
          }}
        >
          <InfiniteScroll
            dataLength={data.length}
            // next={loadMoreData}
            // hasMore={data.length < 50}
            loader={
              <Skeleton
                avatar
                paragraph={{
                  rows: 1,
                }}
                active
              />
            }
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item key={item.userId}>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={
                          'https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg'
                        }
                      />
                    }
                    title={
                      <a
                        onClick={() => {
                          setOpen(true), setUesr(item);
                        }}
                      >
                        {item.Account.Customer.fullname}
                      </a>
                    }
                    description={item.email}
                  />
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      </div>
      {open ? <Chat data={user} /> : ''}
    </div>
  );
};
export default App;
