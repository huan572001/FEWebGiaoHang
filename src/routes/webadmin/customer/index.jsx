import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { AdminCusyomerService } from '@/services/admin/customer';
// import {} from '@/services/customer/Order';
import { columns } from './columns';

const Customer = () => {
  const [data, setData] = useState([]);
  let uniqueId = 1;
  const getAllCustomer = async () => {
    try {
      const response = await AdminCusyomerService.getAllCustomer();
      if (response?.success) {
        setData(response.data);
      }
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  useEffect(() => {
    getAllCustomer();
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
export default Customer;
