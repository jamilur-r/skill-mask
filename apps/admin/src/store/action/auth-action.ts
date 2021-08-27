import axios from "axios";
import { api_key, api_url } from "@skill-mask/app";

export const AdminSignIn = async (email: string, pass: string) => {
  try {
    const url = api_url + "/auth/admin/signin";
    const data = await axios.post(
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
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
