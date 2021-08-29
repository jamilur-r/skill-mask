import * as express from 'express';
import { getLessonById } from '../controller/Lesson';
import { CheckAdmin, Tokenize, ValidateRequest } from '../utils/server-utils';

export const LessonRouter = express.Router();

LessonRouter.get(
  '/by/:id',
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  getLessonById
);
