import {
  showApproveModal,
  showDeleteOderModal,
} from '@/components/Modal/Modal';
import { routerLinks } from '@/utils';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import deleteOrder from './deleteOrder';
export const columns = () => {
  const navigate = useNavigate();
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
      title: 'địa chỉ người gửi',
      key: '3',
      render: (_, info) => <>{info.addressCustomer}</>,
    },
    {
      title: 'Họ tên người Nhận',
      key: '4',
      dataIndex: 'nameReceiver',
    },
    {
      title: 'SDT người Nhận',
      key: '5',
      dataIndex: 'phoneReceiver',
    },
    {
      title: 'địa chỉ người Nhận',
      key: '6',
      dataIndex: 'addressReceiver',
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
