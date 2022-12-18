import Map from 'react-map-gl';
import './index.css';
import { mapboxAccessToken } from '@/variable';
const Page = ({ longitude, latitude }) => {
  return (
    <Map
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 15,
      }}
      style={{ width: '100%', height: '1000px' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={mapboxAccessToken}
    />
  );
};
export default Page;
