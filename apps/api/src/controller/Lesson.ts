import { RequestHandler, Response, Request } from 'express';
import * as path from 'path';
import { Lessons, Video } from '../model/Lessons';
import { minifyVid } from '../utils/server-utils';
import * as fs from 'fs';

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

export const updateVideolesson: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    if (req.file) {
      const {
        name,
        lesson_type,
        lesson_number,
        text,
        title,
        lesson_id,
        video_id,
      } = req.body;
      const urlFromReq = '/media/' + req.file.filename;
      const video_url = await minifyVid(urlFromReq);
      await Lessons.findOneAndUpdate(
        { _id: lesson_id },
        {
          name,
          lesson_number,
          lesson_type,
        }
      );
      Video.findOne({ _id: video_id }).then((res) => {
        const url = path.join(__dirname, res.video_url);
        fs.unlinkSync(url);
      });

      await Video.findOneAndUpdate(
        { _id: video_id },
        {
          title,
          text,
          video_url,
        }
      );

      const lesson = await Lessons.findOne({ _id: lesson_id }).populate([
        'video',
        'text',
        'quiz',
      ]);
      return res.status(200).json({ lesson });
    } else {
      const {
        name,
        lesson_type,
        lesson_number,
        text,
        title,
        lesson_id,
        video_id,
      } = req.body;

      await Lessons.findOneAndUpdate(
        { _id: lesson_id },
        {
          name,
          lesson_number,
          lesson_type,
        }
      );

      await Video.findOneAndUpdate(
        { _id: video_id },
        {
          title,
          text,
        }
      );
      const lesson = await Lessons.findOne({ _id: lesson_id }).populate([
        'video',
        'text',
        'quiz',
      ]);
      return res.status(200).json({ lesson });
    }
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      msg: 'Failed to update',
    });
  }
};
