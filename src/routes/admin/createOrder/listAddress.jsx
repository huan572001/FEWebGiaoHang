import { Button } from 'antd';

const Address = (data, setData) => {
  return (
    <>
      {data?.map((child, index) => {
        return (
          <Button
            onClick={() => {
              setData(child);
            }}
            style={{ background: '#FFFFF' }}
            key={index}
          >
            {child.matching_place_name}
          </Button>
        );
      })}
    </>
  );
};
export default Address;
