/* eslint-disable @typescript-eslint/no-unused-vars */
import { toast } from "react-toastify";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key: unknown) {
      return Promise.resolve(null);
    },
    setItem(_key: unknown, value: unknown) {
      return Promise.resolve(value);
    },
    removeItem(_key: unknown) {
      return Promise.resolve();
    },
  };
};

export const storage = typeof window === "undefined" ? createNoopStorage() : createWebStorage("local");


export const Colors = {
  black: '#272739',
  yellow: '#FFFA85',
  green: '#67D672',
  blue: '4A6FF0',
  light_blue: '#E7F7F7',
  light_black: '#38385F',
  red: '#F53E6A',
};


export const site_title = "Skill Mask";
export const api_url = process.env.api_url || "http://18.119.61.246/api" 
export const api_key = process.env.api_key || "tHZo7YINsWRVZfLUOSbFt3JGAD4pjt1s";

export const toast_suc = (msg: string) =>
  toast(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { backgroundColor: Colors.black, color: Colors.green },
  });

export const toast_err = (msg: string) =>
  toast.error(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { backgroundColor: Colors.black, color: Colors.red },
  });
