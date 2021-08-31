import * as express from 'express';
import {
  addTextLesson,
  addVideoLesson,
  deleteCourse,
  getCourseById,
  getCourses,
  getCoursesOw,
  getVideo,
  startCourse,
} from '../controller/Course';

import {
  CheckAdmin,
  Tokenize,
  upload,
  ValidateRequest,
} from '../utils/server-utils';

export const CourseRouter = express.Router();

CourseRouter.get('/all', ValidateRequest, getCourses);
CourseRouter.get('/admin', ValidateRequest, CheckAdmin, getCoursesOw);
CourseRouter.get('/by/:id', ValidateRequest, getCourseById);
CourseRouter.get('/video/:id', ValidateRequest, Tokenize, CheckAdmin, getVideo);

CourseRouter.post('/add', ValidateRequest, Tokenize, upload.any(), startCourse);
CourseRouter.post(
  '/add/lesson/video',
  ValidateRequest,
  Tokenize,
  upload.single('video'),
  addVideoLesson
);
CourseRouter.post(
  '/delete/:id',
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  deleteCourse
);

CourseRouter.post('/add/lesson/text', ValidateRequest, Tokenize, addTextLesson);
