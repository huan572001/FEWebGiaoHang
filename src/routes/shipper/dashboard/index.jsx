import Map from 'react-map-gl';
const Page = () => {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoiaHVhbjE1NTIwMDEiLCJhIjoiY2xiYnBweW14MDRhcjN2bnk0b2g2Nmk5cCJ9.e-PSiuJoz1lZ-YONJDLKQQ"
    />
  );
};
export default Page;
