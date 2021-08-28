export interface CategoryType {
  id: string;
  name: string;
  description: string;
  image_url: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const GET_ALL_CAT = 'GET_ALL_CAT';

interface GAAction {
  type: typeof GET_ALL_CAT;
  payload: CategoryType[];
}

export type CategoryAction = GAAction;
