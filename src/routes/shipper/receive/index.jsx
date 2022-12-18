import { Table, Tabs } from 'antd';
import { columns } from './columns';
import { ShipperReceiveService } from '@/services/shipper/receive';
import { useEffect, useState } from 'react';
import { informError, informSucess } from '@/components/Modal/Modal';
const Page = () => {
  const [data, setData] = useState([]);
  let uniqueId = 1;
  const getAllAPI = async () => {
    try {
      const response = await ShipperReceiveService.getAllOrder();
      //   if (response.success) {
      //     console.log(response.order);
      //     setData(
      //       response.order.filter(function (e) {
      //         return e.status === null;
      //       })
      //     );
      //   }
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  const approve = async (id) => {
    try {
      const response = await ShipperReceiveService.shipperReciever(id);
      if (response.success) {
        informSucess();
      } else {
        informError();
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllAPI();
  }, []);
  return (
    <>
      <Table
        columns={columns(approve)}
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
