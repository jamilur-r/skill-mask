import React, { useState } from 'react';
import { VideoForm } from '../styles/course.stc';
import { Page } from '../styles/global.stc';
import { LessonsType } from '../types/course-types';

interface Props {
  lesson: LessonsType | undefined;
}
const LUFom = ({ lesson }: Props) => {
  // VIDEO FORM HANDLE
  const [videoInput, setVideoInput] = useState<{
    title: string;
    text: string;
    name: string;
    lesson_number: number;
  }>({
    title: lesson?.video?.title ? lesson.video.title : '',
    text: lesson?.video?.text ? lesson.video.text : '',
    name: lesson?.name ? lesson.name : '',
    lesson_number: lesson?.lesson_number ? lesson.lesson_number : 0,
  });
  const [videoFile, setVideoFile] = useState<File>();

  const handleVideoInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setVideoInput({ ...videoInput, [e.target.name]: e.target.value });
  // VIDEO FORM HANDLE END

  switch (lesson?.lesson_type) {
    case 'VIDEO':
      return (
        <Page>
          <VideoForm>
            <form method="POST">
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

export default LUFom;
