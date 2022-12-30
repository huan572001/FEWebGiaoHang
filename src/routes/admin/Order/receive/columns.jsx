import {
  showApproveModal,
  showDeleteOderModal,
} from '@/components/Modal/Modal';
import { routerLinks } from '@/utils';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
// import deleteOrder from './deleteOrder';
export const columns = (getColumnSearchProps, deleteOrder) => {
  const navigate = useNavigate();
  return [
    {
      title: 'Họ tên người gửi',
      key: '1',
      dataIndex: '1',
      render: (_, info) => <>{info.Customer.fullname}</>,
      // ...getColumnSearchProps('1'),
    },
    {
      title: 'SDT người gửi',
      key: '2',
      // dataIndex: '2',
      render: (_, info) => <>{info.Customer.phone}</>,
      // ...getColumnSearchProps('2'),
    },
    {
      title: 'địa chỉ người gửi',
      key: 'addressCustomer',
      dataIndex: 'addressCustomer',
      ...getColumnSearchProps('addressCustomer'),
    },
    {
      title: 'Họ tên người Nhận',
      key: 'nameReceiver',
      dataIndex: 'nameReceiver',
      ...getColumnSearchProps('nameReceiver'),
    },
    {
      title: 'SDT người Nhận',
      key: 'phoneReceiver',
      dataIndex: 'phoneReceiver',
      ...getColumnSearchProps('phoneReceiver'),
    },
    {
      title: 'địa chỉ người Nhận',
      key: '6',
      dataIndex: 'addressReceiver',
      ...getColumnSearchProps('addressReceiver'),
    },
    {
      title: 'giá ship',
      key: '7',
      dataIndex: 'totalMoney',
    },
    {
      title: 'HOẠT ĐỘNG',
      key: '8',
      render: (_, info) => (
        <>
          <CheckCircleOutlined
            onClick={() => {
              showDeleteOderModal(() => {
                deleteOrder(info.id);
              });
            }}
          />
          <CheckCircleOutlined
            onClick={() => navigate(`edit/${info.id}`, { state: { info } })}
          />
        </>
      ),
    },
  ];
};
