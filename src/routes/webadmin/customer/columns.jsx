import { showApproveModal } from '@/components/Modal/Modal';
import {
  CheckCircleOutlined,
  LockOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import lock from '../component/lock';
import unLock from '../component/unLock';
export const columns = (setSuccess, getColumnSearchProps) => {
  return [
    {
      title: 'Họ tên',
      key: '1',
      render: (_, info) => <>{info?.Customer?.fullname}</>,
      dataIndex: 'fullname',
      // ...getColumnSearchProps(info?.Customer?.fullname),
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
      ...getColumnSearchProps('email'),
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
      render: (_, info) => {
        return info?.isAcctive ? (
          <UnlockOutlined
            onClick={() => {
              showApproveModal(() => {
                info?.isAcctive
                  ? lock(info?.id, setSuccess)
                  : unLock(info?.id, setSuccess);
              }, 'Bạn có chắc chắn khóa tài khoản này không');
            }}
          />
        ) : (
          <LockOutlined
            onClick={() => {
              showApproveModal(() => {
                info?.isAcctive
                  ? lock(info?.id, setSuccess)
                  : unLock(info?.id, setSuccess);
              }, 'Bạn có chắc chắn muon mo tài khoản này không');
            }}
          />
        );
      },
    },
  ];
};
