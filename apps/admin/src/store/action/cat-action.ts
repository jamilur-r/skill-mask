/* eslint-disable no-empty */
import axios from 'axios';
import { api_key, api_url } from '@skill-mask/app';

export const createCat = async (
  name: string,
  description: string,
  image: any,
  auth: string
) => {
  try {
    const url = api_url + '/category';
    const formData = new FormData();
    formData.append('image', image, image.name);
    formData.append('name', name);
    formData.append('description', description);

    const res = await axios.post(url, formData, {
      headers: {
        'content-type': 'multipart/form-data',
        key: api_key,
        authorization: 'barear ' + auth,
      },
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAllCat = async () => {
  try {
    const url = api_url + '/category/all';
    const res = await axios.get(url, {
      headers: {
        key: api_key,
      },
    });
    return res.data;
  } catch (error) {}
};

export const deleteCat = async (
  id: string,
  image_url: string,
  token: string
) => {
  try {
    const url = api_url + `/category/delete/`;
    const res = await axios.post(
      url,
      {
        id: id,
        image_url: image_url,
      },
      {
        headers: {
          key: api_key,
          authorization: 'Bareer ' + token,
        },
      }
    );
    return res.status;
  } catch (error) {
      return 400;
  }
};
