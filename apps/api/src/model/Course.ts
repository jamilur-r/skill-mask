import { Schema, Model, model } from 'mongoose';
import { CoursesType } from '../@types/app-types';
import { removeFile } from '../utils/server-utils';
import { Lessons } from './Lessons';

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

CourseSchema.pre('deleteOne',{document: true, query: false} , async function (next) {
  const img_path = this.image_url.split('/')[this.image_url.split('/').length - 1];
  const vid_path = this.intro_video.split('/')[this.intro_video.split('/').length - 1];
  removeFile(img_path);
  
  if (this.intro_video) {
    removeFile(vid_path);
  }

  this.lessons.map(async (item) => {
    const lesson = await Lessons.findOne({ _id: item })
    await lesson.deleteOne();
  });
  next();
});


const Course = model('courses', CourseSchema);
export default Course;
