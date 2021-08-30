import { api_url, Colors } from '@skill-mask/app';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AdminAppState } from '../store/store';
import { LessonWrap } from '../styles/course.stc';
import { Page } from '../styles/global.stc';

const CourseDetail = ({ courses, token }: RXProps) => {
  const { id } = useParams<{ id: string }>();
  const course = courses.filter((item) => item._id === id)[0];
  course.lessons?.sort((a, b) => a.lesson_number - b.lesson_number);
  return (
    <Page>
      <div
        style={{
          margin: '30px 30px 50px 50px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <h2
          style={{
            marginRight: 15,
            color: Colors.black,
          }}
        >
          Courses - <span>{course.name}</span>
        </h2>
        <Link
          to={{
            pathname: `/add/lesson/${id}`,
          }}
          style={{
            padding: '10px 15px',
            background: Colors.black,
            color: Colors.green,
            fontWeight: 600,
          }}
        >
          ADD NEW LESSON
        </Link>
      </div>
      {course.lessons?.map((item, key) => (
        <LessonWrap key={key}>
          <h4>
            {item.lesson_number}. {item.name} <br />
            
          </h4>
          <p>{item.lesson_type}</p>
          <div className="btns">
            <Link
              className="btn"
              to={{
                pathname: `/update/lesson/${item._id}/${course._id}`,
              }}
            >
              UPDATE
            </Link>
            <button className="btn">DELETE</button>
          </div>
        </LessonWrap>
      ))}
    </Page>
  );
};
const mapState = (state: AdminAppState) => ({
  courses: state.course,
  token: state.auth.token,
});

const connector = connect(mapState);
type RXProps = ConnectedProps<typeof connector>;

export default connector(CourseDetail);
