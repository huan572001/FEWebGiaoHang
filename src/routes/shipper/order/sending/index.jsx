import { Table, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { ShipperReceiveService } from '@/services/shipper/receive';
import { columns } from './columns';
const Page = () => {
  const [data, setData] = useState([]);
  let uniqueId = 1;
  const getAllAPI = async () => {
    try {
      const response = await ShipperReceiveService.getAllOrder();
      if (response.success) {
        setData(
          response.order.filter(function (e) {
            return e.status === false;
          })
        );
      }
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  useEffect(() => {
    getAllAPI();
  }, []);
  return (
    <>
      <Table
        columns={columns()}
        dataSource={data}
        rowKey={(record) => {
          if (!record.__uniqueId) record.__uniqueId = ++uniqueId;
          return record.__uniqueId;
        }}
      />
    </>
  );
};
export default Page;
