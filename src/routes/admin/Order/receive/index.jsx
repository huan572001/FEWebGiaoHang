import { Table, Tabs } from 'antd';
import { columns } from './columns';
import { CustomerReceiveService } from '@/services/customer/receive';
import { useEffect, useState } from 'react';
import { informError, informSucess } from '@/components/Modal/Modal';
const Page = () => {
  const [data, setData] = useState([]);
  let uniqueId = 1;
  const getAllAPI = async () => {
    try {
      const response = await CustomerReceiveService.getAllOrder();
      console.log(response);
      if (response?.success) {
        setData(
          response.data.filter(function (e) {
            return e.status === 'NR';
          })
        );
      }
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  // const approve = async (id) => {
  //   try {
  //     const response = await ShipperReceiveService.shipperReciever(id);
  //     if (response.success) {
  //       informSucess();
  //     } else {
  //       informError();
  //     }
  //   } catch (error) {}
  // };
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
