import axios from 'axios';

import { API_URL } from './constants';

export const registration = requestBody => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  };
  return axios.post(`${API_URL}/register`, requestBody, config);
};
