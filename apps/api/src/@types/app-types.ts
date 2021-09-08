/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, Schema } from 'mongoose';

// USER
export interface UserType extends Document {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: 'ADMIN' | 'USER' | 'CREATOR' | 'SUADMIN';
  phone: string;
  email_confirmed: boolean;
  password: string;
  compareEmail(email: string): Promise<boolean>;
  comparePass(password: string): Promise<boolean>;
}

export interface PasswordRequestType extends Document {
  id: string;
  uid: Schema.Types.ObjectId;
  email: string;
  code: number;
}

export interface VideosType extends Document {
  id: string;
  video_url: string;
  text?: string;
  title: string;
  // lesson_id: Schema.Types.ObjectId
}

export interface QuestionsType extends Document {
  id: string;
  question: string;
  correct_answer: string;
  options: string[];
}

export interface QuizzesType extends Document {
  id: string;
  title: string;
  questions: any;
  // lesson_id: Schema.Types.ObjectId
}

export interface TasksType extends Document {
  id: string;
  title: string;
  task_url: string;
  text: string;
  // lesson_id: Schema.Types.ObjectId
}

export interface TextsType extends Document {
  id: string;
  title: string;
  content: string;
  // lesson_id: Schema.Types.ObjectId
}

export interface LessonsType extends Document {
  id: string;
  name: string;
  lesson_type: 'VIDEO' | 'QUIZ' | 'TEXT';
  video?: Schema.Types.ObjectId;
  quiz?: Schema.Types.ObjectId;
  text?: Schema.Types.ObjectId;
  lesson_number: number;
}

export interface CategoriesType extends Document {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

export interface CoursesType extends Document {
  id: string;
  name: string;
  description: string;
  intro_video?: string;
  image_url: string;
  course_type: 'COURSE' | 'PATH' | 'EXAM';
  status: "PUBLISHED" | "DRAFT" | "REVIEW";
  lessons?: any;
  enrollment_count: number;
  creator: Schema.Types.ObjectId;
  category: Schema.Types.ObjectId;
  price: number;
  course_level: 'BEGINEER' | 'INTERMEDIATE' | 'PROFESSIONAL';
}

export interface ProgressType extends Document {
  lesson_number: number;
  isComplete: boolean;
}

export interface EnrollmentsType extends Document {
  id: string;
  user_id: string;
  course_id: string;
  progress: ProgressType[];
  payment_done: boolean;
}

export interface PaymentHistoryType extends Document {
  id: string;
  paidBy: string;
  paidTo: string;
  amount: string;
}

export interface BalanceSheetType extends Document {
  id: string;
  user_id: string;
  balance: number;
  withdrawn: number;
}

export interface WithdrawHostoryType extends Document {
  id: string;
  user_id: string;
  date: Date;
  amount: number;
}
