import {
  informError,
  informSucess,
  showApproveModal,
} from '@/components/Modal/Modal';
import { ShipperReceiveService } from '@/services/shipper/receive';
import { CheckCircleOutlined } from '@ant-design/icons';
export const columns = (doneReciever, getColumnSearchProps) => {
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
      title: 'địa chỉ người Nhận',
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
            showApproveModal(() => {
              doneReciever(info.id);
            }, 'Xác nhận đã hoàn thành đơn hàng!  ');
          }}
        />
      ),
    },
  ];
};
