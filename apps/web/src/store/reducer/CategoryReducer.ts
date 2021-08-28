import { CategoryType, CategoryAction } from '../../types/category-type';

const initSatte: CategoryType[] = [];

export const CategoryReducer = (
  state = initSatte,
  action: CategoryAction
): CategoryType[] => {
  switch (action.type) {
    case 'GET_ALL_CAT':
      return action.payload;

    default:
      return state;
  }
};
