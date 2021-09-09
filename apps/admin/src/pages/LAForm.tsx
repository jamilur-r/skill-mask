import { Colors, toast_suc } from '@skill-mask/app';
import React, { useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { addCourseVideo } from '../store/action/course-action';
import { AdminAppState } from '../store/store';
import { CourseAddWrap } from '../styles/course.stc';
import { Page } from '../styles/global.stc';
import { CoursesType, UPDATE_COURSE } from '../types/course-types';

interface LessonInput {
  name: string;
  lesson_type: 'VIDEO' | 'QUIZ' | 'TEXT';
  lesson_number: number;
}

interface VideoInput {
  video: File | undefined;
  text: string;
  title: string;
}

const LAForm = ({ token, update_course }: RXProps) => {
  const { course_id } = useParams<{ course_id: string }>();
  const history = useHistory();

  const [lessonInput, setLessonInput] = useState<LessonInput>({
    name: '',
    lesson_number: 0,
    lesson_type: 'VIDEO',
  });

  const [videoInput, setVideoInput] = useState<VideoInput>({
    video: undefined,
    text: '',
    title: '',
  });

  const handleLessonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setLessonInput({ ...lessonInput, [e.target.name]: e.target.value });

  const handleVideoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setVideoInput({ ...videoInput, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (lessonInput.lesson_type === 'VIDEO') {
      const res = await addCourseVideo(
        token,
        course_id,
        lessonInput,
        videoInput
      );
      if (res !== null) {
        update_course(res);
        toast_suc("Lessson Added")
      }
    }
  };

  const renderLessonTypeForm = (): React.ReactElement => {
    switch (lessonInput.lesson_type) {
      case 'VIDEO':
        return (
          <div className="video-inputs">
            <div>
              <label htmlFor="title">Video Title</label>
              <br />
              <input
                type="text"
                name="title"
                placeholder="Video Title"
                required
                onChange={(e) => handleVideoChange(e)}
              />
              <br />
              <label htmlFor="title">Video File</label>
              <br />
              <input
                type="file"
                name="video"
                accept="video/*"
                placeholder="Video"
                required
                onChange={(e) =>
                  setVideoInput({
                    ...videoInput,
                    video: e.target.files ? e.target.files[0] : undefined,
                  })
                }
              />
            </div>
            <div style={{ width: '600px' }}>
              <label htmlFor="text">Explain Your video or important part</label>
              <textarea
                name="text"
                placeholder="Expain"
                required
                minLength={300}
                maxLength={5000}
                onChange={(e) => handleVideoChange(e)}
              ></textarea>
            </div>
          </div>
        );

      case 'TEXT':
        return <p>TEXT</p>;
      default:
        return <p>QUIZ</p>;
    }
  };

  return (
    <>
      <ToastContainer />
      <Page>
        <ArrowLeft
          style={{ marginLeft: 50 }}
          size={30}
          color={Colors.black}
          onClick={() => history.goBack()}
        />
        <CourseAddWrap>
          <form method="POST" onSubmit={async (e) => await handleSubmit(e)}>
            <label htmlFor="name">Lesson Name</label>
            <input
              type="text"
              name="name"
              placeholder="Lesson Name"
              required
              onChange={(e) => handleLessonChange(e)}
            />
            <label htmlFor="number">Lesson Number</label>
            <input
              type="number"
              name="lesson_number"
              placeholder="Lesson Number"
              required
              onChange={(e) => handleLessonChange(e)}
            />
            <label htmlFor="lesson_type">Lesson Type</label>
            <select
              defaultValue="VIDEO"
              name="lesson_type"
              placeholder="Lesson Name"
              required
              onChange={(e) => handleLessonChange(e)}
            >
              <option value="VIDEO">VIDEO</option>
              <option value="TEXT">TEXT</option>
              <option value="QUIZ">QUIZ</option>
            </select>
            {renderLessonTypeForm()}
            <input type="submit" value="ADD LESSON" />
          </form>
        </CourseAddWrap>
      </Page>
    </>
  );
};

const mapState = (state: AdminAppState) => ({
  token: state.auth.token,
});

const mapDispatch = {
  update_course: (data: CoursesType) => ({
    type: UPDATE_COURSE,
    payload: data,
  }),
};

const connector = connect(mapState, mapDispatch);
type RXProps = ConnectedProps<typeof connector>;

export default connector(LAForm);
