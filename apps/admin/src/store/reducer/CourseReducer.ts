import { CoursesType, CourseAction } from '../../types/course-types';

const initState: CoursesType[] = [];

export const CourseReducer = (
  state = initState,
  action: CourseAction
): CoursesType[] => {
  switch (action.type) {
    case 'GET_COURSE':
      return state;
    case 'GET_ALL_COURSE':
      return action.payload;
    case 'ADD_COURSE':
      return [...state, action.payload];
    case 'ADD_LESSON':
      state.map((item) => {
        if (item._id === action.payload.id) {
          item.lessons?.push(action.payload.lesson);
        }
        return item;
      });
      return state;
    case 'UPDATE_COURSE':
      state.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
        return item;
      });
      return state;
    default:
      return state;
  }
};
