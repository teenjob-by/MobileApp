import axios from 'axios';

import { API_URL } from './constants';

export const getJobs = async token => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const result = await axios.get(`${API_URL}/jobs`, config);
    return result;
  } catch (e) {
    console.warn(e);
  }
};
