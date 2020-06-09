import axios from 'axios';
import qs from 'qs';

import { API_URL } from './constants';

export const login = async requestBody => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    const result = await axios.post(`${API_URL}/login`, qs.stringify(requestBody), config);
    return result;
  } catch {}
};
