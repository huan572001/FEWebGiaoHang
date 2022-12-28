import { informError, informSucess } from '@/components/Modal/Modal';
import { AdminService } from '@/services/admin';

const lock = async (id, setSuccess) => {
  try {
    const req = await AdminService.lock(id);
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
export default lock;
