import { OrderService } from '@/services/customer/Order';
import { informError, informSucess } from '@/components/Modal/Modal';
const deleteOrder = async (id) => {
  try {
    const response = await OrderService.deleteOrder(id);
    if (response?.success) {
      informSucess();
    } else {
      informError();
    }
  } catch (error) {}
};
export default deleteOrder;
