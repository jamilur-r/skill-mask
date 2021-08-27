import { Document, Schema } from "mongoose";

// USER
export interface UserType extends Document {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: "ADMIN" | "USER" | "CREATOR" | "SUADMIN";
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
  text: string;
  title: string;
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
  questions: QuestionsType[];
}

export interface TasksType extends Document {
  id: string;
  title: string;
  task_url: string;
  text: string;
}

export interface TextsType extends Document {
  id: string;
  title: string;
  content: string;
}

export interface LessonsType extends Document {
  id: string;
  name: string;
  type: "VIDEO" | "QUIZ" | "TASK" | "TEXT";
  video?: VideosType;
  quiz?: QuizzesType;
  task?: TasksType;
  text?: TextsType;
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
  type: "COURSE" | "PATH" | "EXAM";
  lessons: LessonsType[];
  enrollment_count: number;
  creator: string;
  category: string[];
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
