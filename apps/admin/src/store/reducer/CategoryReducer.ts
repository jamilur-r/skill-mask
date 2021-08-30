import { Category, CategoryActions } from '../../types/cat-types';

const initState: Category[] = [];

export const CategoryReducer = (
  state = initState,
  action: CategoryActions
): Category[] => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [...state, action.payload];

    case 'DELETE_CATEGORY':
      return state.filter((item) => item.id !== action.payload);

    case 'GET_ALL_CATEGORY':
      
      return action.payload;

    default:
      return state;
  }
};
