import { Tabs } from 'antd';
import Sending from './sending';
import SuccessDelivery from './successDelivery';
import Receive from './receive';
const Page = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Đơn hàng chờ người nhận" key="1">
          <Receive />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Đơn hàng đang giao" key="2">
          <Sending />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Đơn hàng giao thành công" key="3">
          <SuccessDelivery />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default Page;
