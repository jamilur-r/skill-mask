import { api_key, api_url } from '@skill-mask/app';
import axios from 'axios';

export const getAllCourses = async (token: string | null) => {
  try {
    const url = api_url + '/course/admin';
    const res = await axios.get(url, {
      headers: {
        key: api_key,
        authorization: 'barerr ' + token,
      },
    });

    return res.data;
  } catch (error) {
    return null;
  }
};

export const addCourseVideo = async (
  token: string | null,
  course_id: string,
  lessoninfo: {
    name: string;
    lesson_number: number;
    lesson_type: 'VIDEO' | 'QUIZ' | 'TEXT';
  },
  videoinfo: {
    video: File | undefined;
    text: string;
    title: string;
  }
) => {
  try {
    const url = api_url + '/course/add/lesson/video';
    const formData = new FormData();
    console.log(videoinfo);
    
    formData.append('video', videoinfo.video ? videoinfo.video : "", videoinfo.video?.name);
    formData.append('name', lessoninfo.name);
    formData.append('lesson_number', lessoninfo.lesson_number.toString());
    formData.append('lesson_type', lessoninfo.lesson_type);
    formData.append('text', videoinfo.text);
    formData.append('title', videoinfo.title);
    formData.append('course_id', course_id);

    const res = await axios.post(url, formData, {
      headers: {
        key: api_key,
        authorization: 'barer ' + token,
      },
    });

    return res.data.course;
  } catch (error) {
    return null;
  }
};
