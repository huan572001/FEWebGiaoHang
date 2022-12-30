import {
  showApproveModal,
  showDeleteOderModal,
} from '@/components/Modal/Modal';
import { CheckCircleOutlined } from '@ant-design/icons';
import deleteOrder from '../receive/deleteOrder';
export const columns = (getColumnSearchProps) => {
  return [
    {
      title: 'Họ tên người gửi',
      key: '1',
      dataIndex: 'fullname',
      render: (_, info) => <>{info.Customer.fullname}</>,
    },
    {
      title: 'SDT người gửi',
      key: '2',
      dataIndex: 'phone',
      render: (_, info) => <>{info.Customer.phone}</>,
    },
    {
      title: 'Địa chỉ người gửi',
      key: '3',
      dataIndex: 'addressCustomer',
      ...getColumnSearchProps('addressCustomer'),
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
      title: 'giá ship',
      key: '7',
      dataIndex: 'totalMoney',
      ...getColumnSearchProps('totalMoney'),
    },
    {
      title: 'HOẠT ĐỘNG',
      key: '8',
      render: (_, info) => (
        <CheckCircleOutlined
          onClick={() => {
            // showDeleteOderModal(() => {
            //   deleteOrder(info.id);
            // });
          }}
        />
      ),
    },
  ];
};
