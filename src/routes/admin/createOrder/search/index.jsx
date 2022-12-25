import { MapService } from '@/services/map';
import { Input, Tooltip } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import Address from '../listAddress';

const Search = (setData, defaultValue = '') => {
  const [dataSearch, setDataSearch] = useState([]);
  const [address, setAddress] = useState({});
  useEffect(() => {
    if (address === '') return;
    searchAddress(address);
    setData(address);
  }, [address]);
  useEffect(() => {
    if (defaultValue != '') {
      searchAddressDefault(defaultValue);
    }
  }, [defaultValue]);
  const searchAddress = async (address) => {
    try {
      const response = await MapService.searchAddress(address);
      if (response) {
        setDataSearch(response?.features);
      }
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  const searchAddressDefault = async (address) => {
    try {
      const response = await MapService.searchAddress(address);
      if (response) {
        setData(response?.features[0]);
      }
    } catch (err) {
      console.log('Error is:', err);
      // setLoading(false);
    }
  };
  return (
    <Tooltip placement="bottom" title={Address(dataSearch, setAddress)}>
      <Input
        value={address.matching_place_name}
        defaultValue={defaultValue}
        placeholder="Địa chỉ"
        style={{ borderRadius: 10 }}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Tooltip>
  );
};
export default Search;
