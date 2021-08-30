import * as express from 'express';
import { getLessonById, updateVideolesson } from '../controller/Lesson';
import { CheckAdmin, Tokenize, upload, ValidateRequest } from '../utils/server-utils';

export const LessonRouter = express.Router();

LessonRouter.get(
  '/by/:id',
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  getLessonById
);

LessonRouter.post(
  '/update/video',
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  upload.single("video"),
  updateVideolesson
);
