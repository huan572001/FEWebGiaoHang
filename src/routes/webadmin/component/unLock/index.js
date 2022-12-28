import { informError, informSucess } from '@/components/Modal/Modal';
import { AdminService } from '@/services/admin';

const unLock = async (id, setSuccess) => {
  try {
    const req = await AdminService.unLock(id);
    if (req.success) {
      setSuccess(true);
      informSucess();
    } else {
      setSuccess(false);
      informError();
    }
  } catch (error) {
    setSuccess(false);
    informError();
  }
};
export default unLock;
