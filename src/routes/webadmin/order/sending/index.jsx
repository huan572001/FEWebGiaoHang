import { Table, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { CustomerReceiveService } from '@/services/customer/receive';
import { ShipperReceiveService } from '@/services/shipper/receive';
import { columns } from './columns';
const Page = () => {
  const [data, setData] = useState([]);
  let uniqueId = 1;
  const getAllAPI = async () => {
    try {
      const response = await CustomerReceiveService.getAllOrder();
      if (response?.success) {
        console.log(response.order);
        setData(
          response.order.filter(function (e) {
            return e.status === 'R';
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
