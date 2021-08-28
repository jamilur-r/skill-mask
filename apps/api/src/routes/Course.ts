import * as express from 'express';
import {
  addTextLesson,
  addVideoLesson,
  getCourseById,
  getCourses,
  startCourse,
} from '../controller/Course';
import {
  CheckAdmin,
  Tokenize,
  upload,
  ValidateRequest,
} from '../utils/server-utils';

export const CourseRouter = express.Router();

CourseRouter.post(
  '/add',
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  upload.single('image'),
  startCourse
);
CourseRouter.post(
  '/add/lesson/video',
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  upload.single('video'),
  addVideoLesson
);

CourseRouter.post(
  '/add/lesson/text',
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  addTextLesson
);

CourseRouter.get('/:id', ValidateRequest, getCourseById);
CourseRouter.get('/', ValidateRequest, getCourses);
