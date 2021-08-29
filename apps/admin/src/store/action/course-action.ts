import { api_key, api_url } from '@skill-mask/app';
import axios from 'axios';

export const getAllCourses = async (token: string | null) => {
  try {
    const url = api_url + '/course/admin';
    const res = await axios.get(url, {
      headers: {
        key: api_key,
        authorization: 'barerr ' + token,
      },
    });

    return res.data;
  } catch (error) {
    return null;
  }
};
