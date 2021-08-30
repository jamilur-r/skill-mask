import { api_key, api_url } from '@skill-mask/app';
import axios from 'axios';
import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AdminAppState } from '../store/store';
import { VideoForm } from '../styles/course.stc';
import { Page } from '../styles/global.stc';
import { LessonsType, UPDATE_VIDEO_LESSON } from '../types/course-types';

interface Props extends RXProps {
  lesson: LessonsType | undefined;
  course_id: string | undefined;
}

const LUFom = ({ lesson, course_id, updateLesson, token }: Props) => {
  // VIDEO FORM HANDLE
  const history = useHistory();

  const [videoInput, setVideoInput] = useState<{
    title: string | undefined;
    text: string | undefined;
    name: string | undefined;
    lesson_number: number | undefined;
  }>({
    title: lesson?.video?.title ? lesson?.video?.title : lesson?.video?.title,
    text: lesson?.video?.text ? lesson?.video?.text : lesson?.video?.text,
    name: lesson?.name ? lesson.name : lesson?.name,
    lesson_number: lesson?.lesson_number
      ? lesson?.lesson_number
      : lesson?.lesson_number,
  });
  const [videoFile, setVideoFile] = useState<File>();

  const handleVideoInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setVideoInput({ ...videoInput, [e.target.name]: e.target.value });

  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = api_url + '/lesson/update/video';
    const formData = new FormData();
    formData.append('video', videoFile ? videoFile : '', videoFile?.name);
    formData.append('name', videoInput.name ? videoInput.name : '');
    formData.append('lesson_type', 'VIDEO');
    formData.append('text', videoInput.text ? videoInput.text : '');
    formData.append('title', videoInput.title ? videoInput.title : '');
    formData.append('lesson_id', lesson?._id ? lesson._id : '');
    formData.append('video_id', lesson?.video?._id ? lesson.video._id : '');

    const res = await axios.post(url, formData, {
      headers: {
        key: api_key,
        authorization: 'bearer ' + token,
      },
    });

    updateLesson(
      lesson?._id ? lesson._id : '',
      course_id ? course_id : '',
      res.data.lesson
    );
    history.goBack();
  };
  // VIDEO FORM HANDLE END

  switch (lesson?.lesson_type) {
    case 'VIDEO':
      return (
        <Page>
          <VideoForm>
            <form
              method="POST"
              onSubmit={async (e) => await handleVideoSubmit(e)}
            >
              <label htmlFor="">Lesson Name</label>
              <input
                type="text"
                name="name"
                placeholder="Lesson Name"
                required
                value={videoInput.name}
                onChange={(e) => handleVideoInputChange(e)}
              />
              <label htmlFor="">Lesson Number</label>
              <input
                type="number"
                name="lesson_number"
                placeholder="Lesson Number"
                required
                value={videoInput.lesson_number}
                onChange={(e) => handleVideoInputChange(e)}
              />

              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                required
                value={videoInput.title}
                onChange={(e) => handleVideoInputChange(e)}
              />
              <label htmlFor="">Content</label>
              <textarea
                name="text"
                rows={10}
                placeholder="Content"
                required
                value={videoInput.text}
                onChange={(e) => handleVideoInputChange(e)}
              ></textarea>
              <label htmlFor="">Video</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) =>
                  setVideoFile(e.target.files ? e.target.files[0] : undefined)
                }
              />
              <input type="submit" value="UPDATE" />
            </form>
          </VideoForm>
        </Page>
      );
    case 'QUIZ':
      return (
        <Page>
          <p>QUIZ</p>
        </Page>
      );
    default:
      return (
        <Page>
          <p>TEXT</p>
        </Page>
      );
  }
};
const mapDiapatch = {
  updateLesson: (
    lesson_id: string,
    course_id: string,
    lesson: LessonsType
  ) => ({
    type: UPDATE_VIDEO_LESSON,
    payload: {
      lesson,
      lesson_id,
      course_id,
    },
  }),
};
const mapState = (state: AdminAppState) => ({
  token: state.auth.token,
});
const connector = connect(mapState, mapDiapatch);

type RXProps = ConnectedProps<typeof connector>;

export default connector(LUFom);
