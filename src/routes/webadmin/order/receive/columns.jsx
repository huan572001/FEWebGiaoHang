import { showApproveModal } from '@/components/Modal/Modal';
import { CheckCircleOutlined } from '@ant-design/icons';
export const columns = (getColumnSearchProps) => {
  return [
    {
      title: 'Họ tên người gửi',
      key: '1',
      render: (_, info) => <>{info.Customer.fullname}</>,
    },
    {
      title: 'SDT người gửi',
      key: '2',
      render: (_, info) => <>{info.Customer.phone}</>,
    },
    {
      title: 'Địa chỉ người gửi',
      key: '3',
      dataIndex: 'addressCustomer',
      ...getColumnSearchProps('addressReceiver'),
    },
    {
      title: 'Họ tên người Nhận',
      key: '4',
      dataIndex: 'nameReceiver',
      ...getColumnSearchProps('nameReceiver'),
    },
    {
      title: 'SDT người Nhận',
      key: '5',
      dataIndex: 'phoneReceiver',
      ...getColumnSearchProps('phoneReceiver'),
    },
    {
      title: 'Địa chỉ người Nhận',
      key: '6',
      dataIndex: 'addressReceiver',
      ...getColumnSearchProps('addressReceiver'),
    },
    {
      title: 'Giá ship',
      key: '7',
      dataIndex: 'totalMoney',
      ...getColumnSearchProps('totalMoney'),
    },
  ];
};
