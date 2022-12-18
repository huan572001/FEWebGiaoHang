import axiosClient from '../axiosClient';
import { mapboxAccessToken } from '@/variable';

export const MapService = {
  searchAddress: async (address) => {
    try {
      return axiosClient.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxAccessToken}`
      );
    } catch (e) {
      console.error(e);
      if (e.response.data.message) {
        // Message.error({ text: e.response.data.message });
      }
      return false;
    }
  },
  distance: async (start, end) => {
    try {
      return axiosClient.get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start.logitude},${start.latitude};${end.logitude},${end.latitude}?access_token=${mapboxAccessToken}`
      );
    } catch (e) {
      console.error(e);
      if (e.response.data.message) {
        // Message.error({ text: e.response.data.message });
      }
      return false;
    }
  },
};
