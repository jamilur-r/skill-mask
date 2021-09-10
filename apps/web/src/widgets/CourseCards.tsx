import { api_url, Colors } from '@skill-mask/app';
import React from 'react';
import { ArrowRight } from 'react-feather';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../store/store';
import { CCWrapper, NoCourse } from '../styles/home.stc';
import CourseItem from './CourseItem';

interface Props extends RXProps {
  title: string;
  message: string;
  displayCount: number;
  filter?: 'COURSE' | 'PATH' | 'EXAM';
  noCourseMsg: string;
}

const CourseCards = ({
  filter,
  title,
  message,
  displayCount,
  course,
  noCourseMsg,
}: Props) => {
  const maxLimit = displayCount < course.length ? displayCount : course.length;

  const data = filter
    ? course.filter((i) => i.course_type === filter).slice(0, maxLimit)
    : course
        .sort((a, b) => a.enrollment_count - b.enrollment_count)
        .slice(0, maxLimit);

  return (
    <CCWrapper>
      <div className="header">
        <h2>
          <span style={{ color: Colors.green }}>{title[0]}</span>
          {title.substring(1, title.length)}
        </h2>
        <p>{message}</p>
      </div>
      <div className={data.length < 1 ? '' : 'cards'}>
        {data.length < 1 ? (
          <NoCourse>
            <h2 dangerouslySetInnerHTML={{ __html: noCourseMsg }}></h2>
          </NoCourse>
        ) : (
          data.map((item, key) => <CourseItem item={item} key={key} number={key} />)
        )}
      </div>
    </CCWrapper>
  );
};
const mapState = (state: AppState) => ({
  course: state.course,
});

const connector = connect(mapState);
type RXProps = ConnectedProps<typeof connector>;

export default connector(CourseCards);
