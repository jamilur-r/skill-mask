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
  
} from '../utils/server-utils';

export const CourseRouter = express.Router();

CourseRouter.get('/all',  getCourses);
CourseRouter.get('/admin',  CheckAdmin, getCoursesOw);
CourseRouter.get('/by/:id',  getCourseById);
CourseRouter.get('/video/:id',  Tokenize, CheckAdmin, getVideo);

CourseRouter.post('/add',  Tokenize, upload.any(), startCourse);
CourseRouter.post(
  '/add/lesson/video',
  
  Tokenize,
  upload.single('video'),
  addVideoLesson
);
CourseRouter.post(
  '/delete/:id',
  
  Tokenize,
  CheckAdmin,
  deleteCourse
);

CourseRouter.post('/add/lesson/text',  Tokenize, addTextLesson);
