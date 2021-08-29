import { RequestHandler, Response, Request } from 'express';
import { Lessons } from '../model/Lessons';

export const getLessonById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const lesson = await Lessons.findOne({ _id: id }).populate([
      'video',
      'text',
      'quiz',
    ]);
    return res.status(200).json({
      lesson,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Failed to find',
    });
  }
};
