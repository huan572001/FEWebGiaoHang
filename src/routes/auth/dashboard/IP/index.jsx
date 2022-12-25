import { useState } from 'react';
import results from './ip';
const IP = () => {
  const [data, setData] = useState([]);

  const submit = () => {
    // console.log(results);
    results();
    // setData(results);
  };
  return (
    <>
      <button
        onClick={() => {
          submit();
        }}
      >
        huan
      </button>
      {/* {data.map((child) => {
        <div>{child}</div>;
      })} */}
    </>
  );
};
export default IP;
