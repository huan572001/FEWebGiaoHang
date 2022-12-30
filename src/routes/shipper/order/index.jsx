import { Tabs } from 'antd';
import Sending from './sending';
import SuccessDelivery from './successDelivery';
const Page = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Đơn hàng đang giao " key="1">
          <Sending />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Đơn hàng đã giao thành công" key="2">
          <SuccessDelivery />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default Page;
