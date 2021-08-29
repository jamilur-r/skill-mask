import { UserType } from './auth-types';
import { Category } from './cat-types';

export interface LessonsType {
  id: string;
  name: string;
  lesson_type: 'VIDEO' | 'QUIZ' | 'TEXT';
  video?: string;
  quiz?: string;
  text?: string;
  lesson_number: number;
}

export interface CoursesType {
  id: string;
  image_url: string;
  course_type: 'COURSE' | 'PATH' | 'EXAM';
  lessons?: LessonsType[];
  enrollment_count: number;
  creator: UserType;
  category: Category;
  course_level: 'BEGINEER' | 'INTERMEDIATE' | 'PROFESSIONAL';
}

export const GET_COURSE = 'GET_COURSE';
export const GET_ALL_COURSE = 'GET_ALL_COURSE';
export const ADD_COURSE = 'ADD_COURSE';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const ADD_LESSON = 'ADD_LESSON';

interface GETCAction {
  type: typeof GET_COURSE;
  payload: CoursesType;
}

interface GETACAction {
  type: typeof GET_ALL_COURSE;
  payload: CoursesType[];
}

interface ADDCAction {
  type: typeof ADD_COURSE;
  payload: CoursesType;
}

interface UPDATECAction {
  type: typeof UPDATE_COURSE;
  payload: CoursesType;
}

interface ADDLAction {
  type: typeof ADD_LESSON;
  payload: {
    id: string;
    lesson: LessonsType;
  };
}

export type CourseAction =
  | GETACAction
  | GETCAction
  | ADDCAction
  | UPDATECAction
  | ADDLAction;
