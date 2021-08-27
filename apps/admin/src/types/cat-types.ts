export interface Category {
  id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: Date;
  update_at: Date;
}

const ADD_CATEGORY = 'ADD_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';
const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY';

interface AddCatAction {
  type: typeof ADD_CATEGORY;
  payload: Category;
}

interface DelCatAction {
  type: typeof DELETE_CATEGORY;
  payload: string;
}

interface GAAction {
  type: typeof GET_ALL_CATEGORY;
  payload: Category[];
}

export type CategoryActions = AddCatAction | DelCatAction | GAAction;
