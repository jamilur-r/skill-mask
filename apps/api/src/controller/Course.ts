/* eslint-disable prefer-const */
import { RequestHandler, Request, Response } from 'express';
import Course from '../model/Course';
import { Lessons, Text, Video } from '../model/Lessons';
import { minifyVid } from '../utils/server-utils';

export const getCourses: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const courses = await Course.find({ status: 'PUBLISHED' }).populate([
      'creator',
      'category',
    ]);
    return res.status(200).json({ courses });
  } catch (error) {
    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};

export const getVideo: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const video = await Video.findOne({ _id: id });
    return res.status(200).json({ video });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};

export const getCoursesOw: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const courses = await Course.find().populate([
      'creator',
      'category',
      'lessons',
      {
        path: 'lessons',
        populate: {
          path: 'video',
        },
      },
      {
        path: 'lessons',
        populate: {
          path: 'text',
        },
      },
      {
        path: 'lessons',
        populate: {
          path: 'quiz',
        },
      },
    ]);

    return res.status(200).json({ courses });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};

export const getCourseById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params;

    const course = await Course.findOne({ _id: id });
    const result = await course.populate(['category', 'creator', 'lessons']);
    return res.status(200).json({
      course: result,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Faild to find course',
    });
  }
};

export const startCourse: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      course_type,
      course_level,
      creator,
      category,
      name,
      price,
      description,
    } = req.body;
    const imgFile = req.files[0];
    const vidFile = req.files[1];

    const image_url = '/media/' + imgFile.filename;
    const vid_path = '/media/' + vidFile.filename;
    const intro_video = await minifyVid(vid_path);

    const course = new Course({
      course_type,
      course_level,
      creator,
      category,
      image_url,
      name,
      price,
      description,
      status: 'DRAFT',
      intro_video,
    });
    await course.save();
    const result = await course.populate(['category', 'creator']);
    return res.status(200).json({
      course: result,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      msg: 'Failed to start course',
    });
  }
};

export const addVideoLesson: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, lesson_type, lesson_number, text, title, course_id } =
      req.body;

    const urlFromReq = '/media/' + req.file?.filename;
    const video_url = await minifyVid(urlFromReq);

    const course = await Course.findOne({ _id: course_id });
    const video = new Video({
      video_url: video_url,
      text,
      title,
    });
    await video.save();

    const lesson = await new Lessons({
      name,
      lesson_number,
      lesson_type,
      video: video.id,
    });
    await lesson.save();

    course.lessons.push(lesson.id);
    await course.save();

    const result = await course.populate([
      { path: 'creator' },
      { path: 'category' },
      { path: 'lessons' },
      {
        path: 'lessons',
        populate: {
          path: 'video',
        },
      },
      {
        path: 'lessons',
        populate: {
          path: 'text',
        },
      },
      {
        path: 'lessons',
        populate: {
          path: 'quiz',
        },
      },
    ]);

    return res.status(200).json({
      course: result,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      msg: 'Failed to add video',
    });
  }
};

export const addTextLesson: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { course_id, content, title, name, lesson_type, lesson_number } =
      req.body;

    const course = await Course.findOne({ id: course_id });
    const text = new Text({
      content,
      title,
    });
    await text.save();

    const lesson = new Lessons({
      name,
      lesson_type,
      lesson_number,
      text: text.id,
    });
    await lesson.save();

    course.lessons.push(lesson.id);
    await course.save();
  } catch (error) {
    return res.status(400).json({
      msg: 'Failed to add text',
    });
  }
};

export const deleteCourse: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course = await Course.findOne({ _id: id });
    await course.deleteOne();
    
    return res.status(200).json({ msg: 'Course deleted' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: 'faild to remove',
    });
  }
};
