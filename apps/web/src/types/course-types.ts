import { UserType } from './auth-types';
import { CategoryType } from './category-type';

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
  enrollment_count: number;
  creator: UserType;
  category: CategoryType;
  lessons: string;
  price: number;
  course_level: 'BEGINEER' | 'INTERMEDIATE' | 'PROFESSIONAL';
  createdAt: string;
  updatedAt: string;
}

export const GET_COURSES = 'GET_COURSES';

interface GetCourseAction {
    type: typeof GET_COURSES;
    payload: CoursesType[]
}


export type CourseActions = GetCourseAction;
