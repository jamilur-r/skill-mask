import * as express from 'express';
import { getLessonById, updateVideolesson } from '../controller/Lesson';
import { CheckAdmin, Tokenize, upload} from '../utils/server-utils';

export const LessonRouter = express.Router();

LessonRouter.get(
  '/by/:id',
  Tokenize,
  CheckAdmin,
  getLessonById
);

LessonRouter.post(
  '/update/video',
  Tokenize,
  CheckAdmin,
  upload.single('video'),
  updateVideolesson
);
