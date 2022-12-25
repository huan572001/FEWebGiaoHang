import { showApproveModal } from '@/components/Modal/Modal';
import { CheckCircleOutlined } from '@ant-design/icons';
export const columns = () => {
  return [
    {
      title: 'Họ tên',
      key: '1',
      dataIndex: 'fullname',
    },
    {
      title: 'SDT',
      key: '2',
      dataIndex: 'phone',
    },
    {
      title: 'địa chỉ',
      key: '3',
      dataIndex: 'address',
    },

    {
      title: 'Giới tính',
      key: '5',
      dataIndex: 'gender',
    },
    {
      title: 'Ngày sinh',
      key: '6',
      dataIndex: 'birthday',
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
