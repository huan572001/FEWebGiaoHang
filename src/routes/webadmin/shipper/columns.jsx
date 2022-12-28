import { showApproveModal } from '@/components/Modal/Modal';
import {
  CheckCircleOutlined,
  LockOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import lock from '../component/lock';
import unLock from '../component/unLock';
export const columns = (setSuccess) => {
  return [
    {
      title: 'Họ tên',
      key: '1',
      render: (_, info) => info?.Shipper?.fullname,
    },
    {
      title: 'SDT',
      key: '2',
      render: (_, info) => info?.Shipper?.phone,
    },
    {
      title: 'địa chỉ',
      key: '3',
      render: (_, info) => info?.Shipper?.address,
    },

    {
      title: 'Giới tính',
      key: '5',
      render: (_, info) => (info?.Shipper?.gender ? <>Nam</> : <>Nữ</>),
    },
    {
      title: 'Ngày sinh',
      key: '6',
      render: (_, info) => info?.Shipper?.birthday,
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
