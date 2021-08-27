import { Category, CategoryActions } from '../../types/cat-types';

const initState: Category[] = [];

export const CategoryReducer = (
  state = initState,
  action: CategoryActions
): Category[] => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      console.log('here');
      return [...state, action.payload];

    case 'DELETE_CATEGORY':
      return state.filter((item) => item.id !== action.payload);

    case 'GET_ALL_CATEGORY':
      console.log(action.payload);
      
      return action.payload;

    default:
      return state;
  }
};
