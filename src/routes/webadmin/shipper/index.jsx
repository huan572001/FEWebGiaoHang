import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { AdminShiperService } from '@/services/admin/shipper';
import {} from '@/services/customer/Order';
import { columns } from './columns';

const Customer = () => {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(true);
  let uniqueId = 1;
  const getAllShiper = async () => {
    try {
      const response = await AdminShiperService.getAllShipper();
      if (response.success) {
        setData(response.data);
      }
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  useEffect(() => {
    if (success) {
      getAllShiper();
      setSuccess(false);
    }
  }, [success]);
  return (
    <>
      <Table
        columns={columns(setSuccess)}
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
