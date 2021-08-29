import { api_key, api_url } from '@skill-mask/app';
import axios from 'axios';

export const getVideo = async (
  id: string | undefined,
  token: string | null
) => {
  const url = api_url + `/course/video/${id}`;
  const data = await axios.get(url, {
    headers: {
      key: api_key,
      authorization: 'barer ' + token,
    },
  });

  return data.data;
};
