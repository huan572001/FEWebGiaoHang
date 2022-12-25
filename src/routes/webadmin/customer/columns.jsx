import { showApproveModal } from '@/components/Modal/Modal';
import { CheckCircleOutlined } from '@ant-design/icons';
export const columns = () => {
  return [
    {
      title: 'Họ tên',
      key: '1',
      render: (_, info) => <>{info?.Customer?.fullname}</>,
      dataIndex: 'fullname',
    },
    {
      title: 'SDT',
      key: '2',
      render: (_, info) => <>{info?.Customer?.phone}</>,
    },
    {
      title: 'Email',
      key: '2',
      dataIndex: 'email',
    },
    {
      title: 'địa chỉ',
      key: '3',
      render: (_, info) => <>{info?.Customer?.address}</>,
    },

    {
      title: 'Giới tính',
      key: '5',
      render: (_, info) => <>{info?.Customer?.address}</>,
    },
    {
      title: 'Ngày sinh',
      key: '6',
      render: (_, info) => <>{info?.Customer?.address}</>,
    },
    {
      title: 'Trạng thái',
      key: '6',
      render: (_, info) =>
        info.isAcctive ? <p>Hoạt động</p> : <p>Không hoạt động</p>,
      dataIndex: 'isAcctive',
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
