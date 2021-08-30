import { Schema, Model, model } from 'mongoose';
import { CoursesType } from '../@types/app-types';

type CourseModel = Model<CoursesType>;

const CourseSchema = new Schema<CoursesType, CourseModel, CoursesType>(
  {
    image_url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    intro_video: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    course_type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    lessons: {
      type: [Schema.Types.ObjectId],
      ref: 'lessons',
    },
    status: {
      type: String,
      required: true,
      default: 'DRAFT',
    },
    enrollment_count: {
      type: Number,
      required: true,
      default: 0,
    },
    creator: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
    course_level: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = model('courses', CourseSchema);
export default Course;
