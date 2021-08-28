import { Schema, Model, model } from 'mongoose';
import {
  LessonsType,
  QuestionsType,
  QuizzesType,
  TextsType,
  VideosType,
} from '../@types/app-types';

type LessonsModel = Model<LessonsType>;
type TextModel = Model<TextsType>;
type VideoModel = Model<VideosType>;
type QuizModel = Model<QuizzesType>;
type QuestionModel = Model<QuestionsType>;

const TextSchema = new Schema<TextsType, TextModel, TextsType>({
  content: { type: String, required: true },
  title: { type: String, required: true },
});

const VideoSchema = new Schema<VideosType, VideoModel, VideosType>({
  video_url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  title: {
    type: String,
    require: true,
  },
});

const QuestionSchema = new Schema<QuestionsType, QuestionModel, QuestionsType>({
  question: {
    type: String,
    required: true,
  },
  correct_answer: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
});

const QuizSchema = new Schema<QuizzesType, QuizModel, QuizzesType>({
  title: {
    type: String,
    required: true,
  },
  questions: {
    type: [Schema.Types.ObjectId],
    ref: 'questions',
    required: true,
  },
});

const LessonSchema = new Schema<LessonsType, LessonsModel, LessonsType>(
  {
    name: {
      type: String,
      required: true,
    },
    lesson_type: {
      type: String,
      required: true,
    },
    video: { type: Schema.Types.ObjectId, ref: 'videos' },
    quiz: { type: Schema.Types.ObjectId, ref: 'quizzes' },
    text: { type: Schema.Types.ObjectId, ref: 'texts' },
    lesson_number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Lessons = model<LessonsType, LessonsModel>(
    'lessons',
    LessonSchema
  ),
  Quiz = model<QuizzesType, QuizModel>('quizzes', QuizSchema),
  Text = model<TextsType, TextModel>('texts', TextSchema),
  Question = model<QuestionsType, QuestionModel>('questions', QuestionSchema),
  Video = model<VideosType, VideoModel>('videos', VideoSchema);
