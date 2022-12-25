import { showApproveModal } from '@/components/Modal/Modal';
import { CheckCircleOutlined } from '@ant-design/icons';
export const columns = () => {
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
        <CheckCircleOutlined
          onClick={() => {
            showApproveModal(() => {
              // confirmMentor(info.user.id, 'approve', setData);
              // approve(info.id);
            });
          }}
        />
      ),
    },
  ];
};
