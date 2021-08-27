import axios from 'axios';
import { api_key, api_url, toast_err } from '@skill-mask/app';

export const SignInUser = async (email: string, pass: string) => {
  const url = api_url + '/auth/signin';

  try {
    const res = await axios.post(
      url,
      {
        email: email,
        pass: pass,
      },
      {
        headers: {
          key: api_key,
        },
      }
    );

    return {
      status: res.status,
      data: res.data,
    };
  } catch (error) {
    toast_err('Opps');

    return {
      status: 400,
      data: undefined,
    };
  }
};

export const SignUpUser = async (data: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}) => {
  const url = api_url + '/auth/signup';

  try {
    const res = await axios.post(
      url,
      {
        email: data.email,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
      },
      {
        headers: {
          key: api_key,
        },
      }
    );

    return {
      status: res.status,
      data: res.data,
    };
  } catch (error) {
    toast_err('Opps');

    return {
      status: 400,
      data: undefined,
    };
  }
};
