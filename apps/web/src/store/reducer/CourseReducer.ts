import { CoursesType, CourseActions } from '../../types/course-types';

const initState: CoursesType[] = [];

export const CourseReducer = (
  state = initState,
  action: CourseActions
): CoursesType[] => {
  switch (action.type) {
    case 'GET_COURSES':
      return action.payload;

    default:
      return state;
  }
};
