import { UserType } from './auth-types';
import { Category } from './cat-types';

export interface VideosType {
  _id: string;
  video_url: string;
  text?: string;
  title: string;
  // lesson_id: Schema.Types.ObjectId
}

export interface QuestionsType {
  _id: string;
  question: string;
  correct_answer: string;
  options: string[];
}

export interface QuizzesType {
  _id: string;
  title: string;
  questions: QuestionsType[];
  // lesson_id: Schema.Types.ObjectId
}

export interface TextsType {
  _id: string;
  title: string;
  content: string;
  // lesson_id: Schema.Types.ObjectId
}

export interface LessonsType {
  _id: string;
  name: string;
  lesson_type: 'VIDEO' | 'QUIZ' | 'TEXT';
  video?: VideosType;
  quiz?: QuizzesType;
  text?: TextsType;
  lesson_number: number;
}

export interface CoursesType {
  _id: string;
  name: string;
  description: string;
  intro_video?: string;
  image_url: string;
  course_type: 'COURSE' | 'PATH' | 'EXAM';
  status: 'PUBLISHED' | 'DRAFT' | 'REVIEW';
  lessons?: LessonsType[];
  enrollment_count: number;
  creator: UserType;
  category: Category;
  price: number;
  course_level: 'BEGINEER' | 'INTERMEDIATE' | 'PROFESSIONAL';
}

export const GET_COURSE = 'GET_COURSE';
export const GET_ALL_COURSE = 'GET_ALL_COURSE';
export const ADD_COURSE = 'ADD_COURSE';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const ADD_LESSON = 'ADD_LESSON';
export const UPDATE_VIDEO_LESSON = 'UPDATE_VIDEO_LESSON';

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
interface ULVlesson {
  type: typeof UPDATE_VIDEO_LESSON;
  payload: {
    course_id: string;
    lesson_id: string;
    lesson: LessonsType;
  };
}

export type CourseAction =
  | GETACAction
  | GETCAction
  | ADDCAction
  | UPDATECAction
  | ULVlesson
  | ADDLAction;
