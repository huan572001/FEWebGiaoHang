import { ShipperReceiveService } from '@/services/shipper/receive';
import { Button, Card, Col, Row, Tabs, DatePicker } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';

const Page = () => {
  const { RangePicker } = DatePicker;
  const [total, setTotal] = useState([]);
  const [num, setNum] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    getAllAPI();
  }, [date]);
  const getAllAPI = async () => {
    try {
      const response = await ShipperReceiveService.getallreciever();
      if (response.success) {
        totalDelivery(response, date);
      }
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  const totalDelivery = (response, date) => {
    let time = date;
    if (time === undefined) {
      time = [new Date('1990-10-22'), new Date()];
    }
    let sum = 0;
    let num = 0;
    response.order.map(function (e) {
      if (
        e.status === 'FD' &&
        new Date(e.updatedAt) >= time[0] &&
        new Date(e.updatedAt) <= time[1]
      ) {
        console.log();
        sum += e.totalMoney;
        num += 1;
      }
    });
    console.log(num);
    setTotal(sum);
    setNum(num);
  };
  const conchange = (e) => {
    setDate([new Date(e[0].format()), new Date(e[1].format())]);
  };
  console.log(date);
  return (
    <div className="site-card-wrapper">
      <Row gutter={24}>
        <Col span={12}>
          <Card title="Thống kê" bordered={false}>
            <RangePicker onChange={conchange} />
            <div>Tổng số đơn hàng đã hoàn thành: {num}</div>
            <div>Tổng số tiền đã nhận :{total} VND</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Page;
